import axios from "axios";
import { uri } from "../data";

export const getData = async (params: any) => {
  try {
    const res = await axios.get(`${uri}/${params.route}`, {
      params: {
        data: params.data,
        lat: params.lat,
        lon: params.lon,
        limit: params.limit,
        lon_min: params.lon_min,
        lon_max: params.lon_max,
        lat_min: params.lat_min,
        lat_max: params.lat_max,
        filter: params.filter,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
