import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebase.config";
import { Signal, signal } from "@preact/signals-react";
import { Station } from "../../interfaces/station";

const db = getFirestore(app);

export const listStation: Signal<Station[]> = signal([]);
export class StationDataState {
  static getListSatation = async (): Promise<Station[]> => {
    try {
      const querySnapshotGbaka = await getDocs(collection(db, "GaresGbaka"));
      const querySnapshotTaxi = await getDocs(collection(db, "GaresTaxi"));
      if (querySnapshotGbaka ||querySnapshotTaxi) {
        querySnapshotGbaka.docs.map((doc, index) => {
          listStation.value.push({
            id: index,
            libelle: doc.data().name,
            commune: doc.data().commune,
            type: doc.data().type,
            localisation: doc.data().location,
          });
        });
        querySnapshotTaxi.docs.map((doc, index) => {
          listStation.value.push({
            id: index,
            libelle: doc.data().name,
            commune: doc.data().commune,
            type: doc.data().type,
            localisation: doc.data().location,
          });
        });
      } 
    } catch (error) {
      alert(error);
    }

    return listStation.value;
  };
}
