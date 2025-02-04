export const getBarChartMargin = (
  showXAxisLabel: boolean,
  showYAxisLabel: boolean,
  orientation: "horizontal" | "vertical",
) => ({
  top: orientation === "vertical" ? 12 : 4,
  right: orientation === "vertical" ? 4 : 12,
  bottom: showXAxisLabel ? 64 : 12,
  left: showYAxisLabel ? 64 : 4,
});
