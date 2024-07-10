export type Driver = {
  uuid:string
    id: number;
    nom: string;
    email: string;
  };

  export type DriverToFirebase={
    name:string;
    email:string;
    isDriver:boolean

  }
  
  export const TableheaderDriver = [
    {
      label: "Id",
    },
    {
        label: "Nom",
    },
    {
        label: "Email",
    },
    
  ];
  