export const addUnit = (weatherUnitString: string) => {
  if (weatherUnitString.toLowerCase().includes("temperature")) return "\u00b0C";
  if (weatherUnitString.toLowerCase().includes("wind")) return " km / h";
  if (weatherUnitString.toLowerCase().includes("humidity")) return " %";
  if (weatherUnitString.toLowerCase().includes("pressure")) return " Pa";
  else return "";
};
