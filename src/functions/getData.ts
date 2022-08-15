import { uri } from "../data";

export const getData = async (params: any) => {
  let res;
  if (params.data && params.limit) {
    res = await fetch(`${uri}/${params.route}/${params.limit}&${params.data}`);
  } else if (params.data) {
    res = await fetch(`${uri}/${params.route}/${params.data}`);
  } else {
    res = await fetch(`${uri}/${params.route}`);
  }
  if (res.status !== 200) {
    throw Error("problem getting data");
  }
  const body = await res.json();
  return body;
};
