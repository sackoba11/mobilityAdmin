/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../../firebase.config";
import { Driver, DriverToFirebase } from "../../interfaces/Driver";
import { Signal, signal } from "@preact/signals-react";
import { defer } from "react-router-dom";

const db = getFirestore(app);

let lastUpdateDate:Date|null=null;
export const listDriver:Signal<Driver[]> = signal([])
export class DriversDataState{

  static    getListDrivers =async  (): Promise<Driver[]> => {
    const currentDate=new Date();
    if(!lastUpdateDate || currentDate.getHours()>lastUpdateDate.getHours()){
    try {
      const q=query(collection(db, "users"), where("isDriver","==",true))
      const querySnapshot = await getDocs(q);
      listDriver.value=[];
      if (querySnapshot) {
        listDriver.value=[...querySnapshot.docs.map((doc, index) => ({
              id:index,
              uuid:doc.id,
              nom:doc.data().name,
              email:doc.data().email
  
          }))
        ]
      } else {
        alert("error Liste Vide");
      }
    } catch (error) {
      alert(error);
    }
    lastUpdateDate=new Date();
  }
  
    return listDriver.value ;
  };
  static loaderDriver =  () => {
    return defer({ driverListPromise: DriversDataState.getListDrivers() });
  };

  static addDriver = async (data: any): Promise<void> => {
    const dataDriver: DriverToFirebase = {
      name: data[1],
      email: data[2],
      isDriver: true,
    };

    try {
      console.log(dataDriver)
      alert(dataDriver.name);
    } catch (error) {
      console.log(error);
    }
  };

}
 
