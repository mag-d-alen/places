export const processCategoryName = (name: string) => {
  return name.includes("_")
    ? name
        .split("_")
        .filter((word) => word !== "_")
        .join(" ")
    : name;
};
