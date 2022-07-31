export type MainContextType = {
  location: string;
  setLocation: (place: string) => void;
  feature: string;
  setFeature: (f: string) => void;
  infoType: string | undefined;
  setInfoType: (option: string) => void;
  info: InfoType;
  attractions: any[];
  getAttractions: () => void;
  setAttractions: (a: any[]) => void;
  getDetailedInfo: (id: string) => void;
  detailedInfo: any;
  setDetailedInfo: (id: string) => void;
};
export type InfoType = {
  name?: string;
  country?: string;
  lat?: number;
  lon?: number;
  population?: number;
  timezone?: string;
  status?: string;
};
export type AttractionType = {
  xid: string;
  name: string;
  kinds: string;
};
