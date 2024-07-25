/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../firebase.config";
import { Bus, BusToFirebase, Itineraire } from "../../interfaces/Bus";
import { Signal, signal } from "@preact/signals-react";
import { defer } from "react-router-dom";

const db = getFirestore(app);
const RefDb = collection(db, "listBus");
let lastUpdateDate: Date | null = null;
export const listBus: Signal<Bus[]> = signal([]);

export class BusDataState {
  static getListBus = async (): Promise<Bus[]> => {
    const currentDate = new Date();
    if (
      !lastUpdateDate ||
      currentDate.getSeconds() > lastUpdateDate.getSeconds()
    ) {
      try {
        const querySnapshot = await getDocs(RefDb);
        listBus.value = [];
        if (querySnapshot) {
          listBus.value = [
            ...querySnapshot.docs.map((doc, index) => ({
              id: doc.id,
              index: index,
              numero: doc.data().number,
              source: doc.data().source,
              destination: doc.data().destination,
              itineraire: doc.data().roadMap,
              statut: doc.data().isActive,
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

    return listBus.value;
  };

  static loaderBus = () => {
    return defer({ busListPromise: BusDataState.getListBus() });
  };

  static addBus = async (data: any): Promise<void> => {
    let roadMap: Itineraire[] = [];
    const firstSeach = ";";
    const secondSearch = ",";
    const location = data[4];
    const locationSplitedFisrt = location.split(firstSeach);
    for (let index = 0; index < locationSplitedFisrt.length; index++) {
      const locationSplitedSecond =
        locationSplitedFisrt[index].split(secondSearch);

      const location: Itineraire = {
        lat: locationSplitedSecond[0].trim(),
        long: locationSplitedSecond[1].trim(),
      };
      roadMap = [...roadMap, location];
    }
    const dataBus: BusToFirebase = {
      number: data[1],
      source: data[2],
      destination: data[3],
      roadMap: roadMap,
      isActive: false,
    };

    try {
      const docref = await addDoc(RefDb, dataBus);
      console.log(docref.id);
    } catch (error) {
      console.log(error);
    }
  };

  static deleteBus = async (idBus: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, "listBus", idBus));
    } catch (error) {
      console.log("erreur:", error);
    }
  };
}
