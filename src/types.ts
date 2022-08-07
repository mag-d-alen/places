
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

export type InitialStateType = {
  place: string;
  basicInfo: any;
  attractions: any;
};
export type WeatherType = {
  
  apparentTemperature: number;
  cloudCover: number;
  dewPoint: number;
  humidity: number;
  icon: string;
  lat: number;
  lng: number;
  ozone: number;
  precipIntensity: number;
  pressure: number;
  summary: string;
  temperature: number;
  time: number;
  uvIndex: number;
  visibility: number;
  windBearing: number;
  windGust: number;
  windSpeed: number;
};
