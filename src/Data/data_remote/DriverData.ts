import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../../firebase.config";
import { Driver } from "../../interfaces/Driver";
import { Signal, signal } from "@preact/signals-react";

const db = getFirestore(app);

export const listDriver:Signal<Driver[]> = signal([])


export class DriversDataState{

  static    getListDrivers =async  (): Promise<Driver[]> => {
    try {
      const q=query(collection(db, "users"), where("isDriver","==",true))
      const querySnapshot = await getDocs(q);
      if (querySnapshot) {
        querySnapshot.docs.map((doc, index) => {
          listDriver.value.push({
              id:index,
              uuid:doc.id,
              nom:doc.data().name,
              email:doc.data().email
  
          });
        });
      } else {
        alert("error Liste Vide");
      }
    } catch (error) {
      alert(error);
    }
  
    return listDriver.value;
  };


}
 
