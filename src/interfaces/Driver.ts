export type Driver = {
  id:string
    index: number;
    nom: string;
    email: string;
  };

  export type DriverToFirebase={
    uid:string;
    name:string;
    email:string;
    isDriver:boolean

  }
  
  export const TableheaderDriver = [
    {
      label: "Index",
    },
    {
        label: "Nom",
    },
    {
        label: "Email",
    },
    
  ];
  