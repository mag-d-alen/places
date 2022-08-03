import { uri } from "../data";

export const getData = async (params: any) => {
  const res = params.data
    ? await fetch(`${uri}/${params.route}/${params.data}`)
    : await fetch(`${uri}/${params.route}`);
  if (res.status !== 200) {
    throw Error("problem getting data");
  }
  const body = await res.json();
  return body;
};
