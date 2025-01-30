export const getBarChartMargin = (
  showXAxisLabel: boolean,
  showYAxisLabel: boolean,
) => ({
  top: 12,
  right: 4,
  bottom: showXAxisLabel ? 64 : 12,
  left: showYAxisLabel ? 64 : 4,
});
