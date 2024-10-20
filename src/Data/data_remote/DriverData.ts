/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase.config";
import { Driver, DriverToFirebase } from "../../interfaces/Driver";
import { Signal, signal } from "@preact/signals-react";
import { defer } from "react-router-dom";

const db = getFirestore(app);
const refDb = collection(db, "users");
let lastUpdateDate: Date | null = null;
export const listDriver: Signal<Driver[]> = signal([]);
export class DriversDataState {
  static getListDrivers = async (): Promise<Driver[]> => {
    const currentDate = new Date();
    if (
      !lastUpdateDate ||
      currentDate.getSeconds() > lastUpdateDate.getSeconds()
    ) {
      try {
        const q = query(refDb, where("isDriver", "==", true));
        const querySnapshot = await getDocs(q);
        listDriver.value = [];
        if (querySnapshot) {
          listDriver.value = [
            ...querySnapshot.docs.map((doc, index) => ({
              id: doc.id,
              index: index,
              nom: doc.data().name,
              email: doc.data().email,
            })),
          ];
        } else {
          alert("error Liste Vide");
        }
      } catch (error) {
        alert(error);
      }
      lastUpdateDate = new Date();
    }

    return listDriver.value;
  };
  static loaderDriver = () => {
    return defer({ driverListPromise: DriversDataState.getListDrivers() });
  };

  static addDriver = async (data: any): Promise<void> => {
    
    try {

    const auth = getAuth();
    const userCredential=await  createUserWithEmailAndPassword(auth, data[2], "Password2023");
      
    const user = userCredential.user;
    const uid=user.uid;

    const dataDriver: DriverToFirebase = {
      uid:uid,
      name: data[1],
      email: data[2],
      isDriver: true,
    };
 
      const docref=await addDoc(refDb,dataDriver);
      console.log(docref.id);
    } catch (error) {
      console.log(error);
    }
  };

  static deleteDriver = async (idDriver: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, "users", idDriver));
    } catch (error) {
      console.log("erreur:", error);
    }
  };
  
}
