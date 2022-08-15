export const getAllFilters = (attractions: any[]) => {
  let allfilters: string[] = [];
  attractions.map((attraction) => {
    const filters = attraction.properties.kinds.split(",");
    return (allfilters = [...allfilters, ...filters]);
  });
  return allfilters.reduce(
    (acc: string[], curr: string) =>
      acc.includes(curr) ? acc : [...acc, curr],
    [] as string[]
  );
};
