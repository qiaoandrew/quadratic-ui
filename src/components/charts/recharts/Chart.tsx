"use client";

import { createContext, useContext, useId, useMemo } from "react";
import * as RechartsPrimitive from "recharts";
import type {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { cn } from "~/utils/tailwind";

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
>;

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = createContext<ChartContextProps | null>(null);

function useChart() {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

interface ChartContainerProps extends React.ComponentProps<"div"> {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}

function ChartContainer({
  id,
  config,
  className,
  children,
  ...props
}: ChartContainerProps) {
  const uniqueId = useId();
  const chartId = `char-${id ?? uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "text-3 flex aspect-video justify-center",
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50",
          "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
          "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-layer]:outline-hidden",
          "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-radial-bar-background-sector]:fill-muted",
          "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
          "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-sector]:outline-hidden",
          "[&_.recharts-surface]:outline-hidden",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

function ChartTooltip({
  animationDuration = 150,
  ...props
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip>) {
  return (
    <RechartsPrimitive.Tooltip
      animationDuration={animationDuration}
      {...props}
    />
  );
}
// defaultProps and displayName need to be set for the tooltip to work
// https://github.com/recharts/recharts/issues/412#issuecomment-472491968
ChartTooltip.defaultProps = RechartsPrimitive.Tooltip.defaultProps;
ChartTooltip.displayName = RechartsPrimitive.Tooltip.displayName;

interface GetPayloadConfigFromPayloadParams {
  config: ChartConfig;
  payload: unknown;
  key: string;
}

function getPayloadConfigFromPayload({
  config,
  payload,
  key,
}: GetPayloadConfigFromPayloadParams) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}

interface ChartTooltipContentProps
  extends React.ComponentProps<typeof RechartsPrimitive.Tooltip>,
    Omit<React.ComponentProps<"div">, "content"> {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
}

function ChartTooltipContent({
  active,
  payload,
  formatter,
  nameKey,
  color,
  label,
  labelKey,
  labelFormatter,
  hideLabel = false,
  labelClassName,
  indicator = "dot",
  hideIndicator = false,
  className,
  ref,
}: ChartTooltipContentProps) {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;

    if (!item) {
      return null;
    }

    const key = `${labelKey ?? item.dataKey ?? item.name ?? "value"}`;
    const itemConfig = getPayloadConfigFromPayload({
      config,
      payload: item,
      key,
    });
    const value =
      !labelKey && typeof label === "string"
        ? (config[label]?.label ?? label)
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [
    hideLabel,
    payload,
    labelKey,
    config,
    label,
    labelFormatter,
    labelClassName,
  ]);

  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-1.5 border-border/50 bg-background text-3 grid min-w-32 items-start gap-y-1.5 border px-2.5 py-2",
        className,
      )}
    >
      {!nestLabel && tooltipLabel}
      <div className="flex flex-col gap-y-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload({
            config,
            payload: item,
            key,
          });
          const indicatorColor =
            color ?? (item.payload as { fill: string }).fill ?? item.color;

          return (
            <div
              className={cn(
                "flex w-full items-stretch gap-x-2",
                "[&>svg]:text-muted-foreground [&>svg]:size-2.5",
                indicator === "dot" && "items-center",
              )}
              key={item.dataKey}
            >
              {formatter && item.value !== undefined && item.name ? (
                formatter(
                  item.value,
                  item.name,
                  item,
                  index,
                  item.payload as Payload<ValueType, NameType>[],
                )
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "rounded-0.5 shrink-0 border-(--color-border) bg-(--color-bg)",
                          {
                            "size-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          },
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center",
                    )}
                  >
                    <div className="flex flex-col gap-y-1.5">
                      {nestLabel && tooltipLabel}
                      <span className="text-muted-foreground">
                        {itemConfig?.label ?? item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="font-mono font-medium tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend;

interface ChartLegendContentProps
  extends Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign">,
    React.ComponentProps<"div"> {
  nameKey?: string;
  hideIcon?: boolean;
}

function ChartLegendContent({
  payload,
  nameKey,
  hideIcon = false,
  verticalAlign = "bottom",
  ref,
  className,
}: ChartLegendContentProps) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-x-4",
        verticalAlign === "top" ? "mb-6" : "mt-6",
        className,
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey ?? (item?.dataKey as string) ?? "value"}`;
        const itemConfig = getPayloadConfigFromPayload({
          config,
          payload: item,
          key,
        });

        return (
          <div
            className={cn(
              "flex items-center gap-x-1.5",
              "[&>svg]:text-muted-foreground [&>svg]:size-3",
            )}
            key={item.value as string}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="rounded-0.5 size-2 shrink-0"
                style={{ backgroundColor: item.color }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

interface ChartStyle {
  id: string;
  config: ChartConfig;
}

function ChartStyle({ id, config }: ChartStyle) {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme ?? config.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `${prefix} [data-chart=${id}] {
            ${colorConfig
              .map(([key, itemConfig]) => {
                const color =
                  itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ??
                  itemConfig.color;
                return color ? `  --color-${key}: ${color};` : null;
              })
              .join("\n")}
            }`,
        ),
      }}
    />
  );
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
