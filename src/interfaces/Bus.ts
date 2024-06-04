type Itineraire=
  {
lat:number;
long:number
  }


export type Bus = {
  id: number;
  numero: string;
  source: string;
  destination: string;
  itineraire:Itineraire[];
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
