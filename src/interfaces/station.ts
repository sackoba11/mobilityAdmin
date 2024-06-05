import { Itineraire } from "./Bus";

export type Station = {
  id: number;
  libelle: string;
  type: string;
  commune: string;
  localisation: Itineraire[];
};

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
