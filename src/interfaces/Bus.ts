export type Itineraire=
  {
lat:number;
long:number
  }


export type Bus = {
  id: string;
  index:number
  numero: string;
  source: string;
  destination: string;
  itineraire:Itineraire[];
  statut: boolean;
};
export type BusToFirebase = {
  number: string;
  source: string;
  destination: string;
  roadMap:Itineraire[];
  isActive: boolean;

};


export type TableHeaderBus={
  label:string
}
export const tableHeaderBus:TableHeaderBus[] = [
  
  {
    label: "Index",
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
