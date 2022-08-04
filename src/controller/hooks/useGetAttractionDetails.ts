import { useDispatch, useSelector } from "react-redux";
import { setAttractionDetails } from "../../model/context/mainSlice";
import { getData } from "../../functions/getData";

export const useGetAttractionDetails = (id: string) => {
  const dispatch = useDispatch();
  const details = useSelector((s: any) => s.info.attractionDetails);
  if (id === details.xid) return;
  getData({
    route: "details",
    data: id,
  })
    .then((body) => {
      dispatch(setAttractionDetails(body));
    })
    .catch((err) => console.log(err));
};
