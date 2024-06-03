export type Bus = {
  id: number;
  numero: string;
  source: string;
  destination: string;
  itineraire: string;
  statut: boolean;
};


export type TableHeaderBus={
  label:string
}
export const tableHeaderBus:TableHeaderBus[] = [
  {
    label: "Id",
  },
  {
    label: "Numero",
  },
  {
    label: "Source",
  },
  {
    label: "Destination",
  },
  {
    label: "Itineraire",
  },
  

];
