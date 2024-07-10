import { Itineraire } from "./Bus";

export type Station = {
  id: number;
  libelle: string;
  type: string;
  commune: string;
  localisation: Itineraire[];
};

export type Location={
  label?:string;
  lat: number;
  long:number;
 }
export type StationToFirebase={
  name:string;
  commune:string;
  type: string;
  location:Location
}

export const TableHeaderStation = [
  {
    label: "Id",
  },
  {
    label: "Libelle",
  },
  {
    label: "Commune",
  },
  {
    label: "Type",
  },
  {
    label: "Localisation",
  },


  
];
