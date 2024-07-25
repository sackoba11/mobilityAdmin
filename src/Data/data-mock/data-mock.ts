// import { Bus } from "../../interfaces/Bus";
// import { Driver } from "../../interfaces/Driver";
import { AllUsers } from "../../interfaces/User";
// import { Station } from "../../interfaces/station";

// export const getBusData=()=>{
//     const tableRow: Bus[] = [];
//   for (let index = 0; index < 50; index++) {
//     tableRow.push({
//       id: index,
//       numero: "85",
//       source: "Gare Campus",
//       destination: " Youpgon kouté",
//       itineraire: ["Youpgon kouté - Gare Campus"],
//       statut: index % 2 == 0 ? true : false,
//     });
//   }

//   return tableRow;

// }
// export const getDriverData=()=>{
//     const tableRow: Driver[] = [];
//   for (let index = 0; index < 30; index++) {
//     tableRow.push({
//       id: index,
//       email:"badrasacko11@hmail.com",
//       nom:"Sacko BA"
//     });
//   }

//   return tableRow;

// }
// export const getStationData=()=>{
//     const tableRow: Station[] = [];
//   for (let index = 0; index < 50; index++) {
//     tableRow.push({
//       id: index,
//       libelle: "Adjamé Liberté",
//       commune:"Adjamé",
//       localisation:
//         [
//         "5.1555",
//         "-3.566"
//         ]
//     ,
//       type: index % 2 == 0 ? "Taxi" : "Gbaka",
//     });
//   }

  // return tableRow;

// }
export const getUsersData=()=>{
    const tableRow: AllUsers[] = [];
  for (let index = 0; index < 50; index++) {
    tableRow.push({
      id:"2",
      index: index,
      email:"badra@hmail.com",
      nom:"Sacko ali"
    });
  }

  return tableRow;

}