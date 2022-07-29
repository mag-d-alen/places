import { uri } from "../data";

export const useGetData = async (params: any) => {
  if (!location) return;
  const res = await fetch(`${uri}/${params.route}/${params.data}`);
  if (res.status !== 200) {
    throw Error("problem getting data");
  }
  const body = await res.json();
  return body;
};
