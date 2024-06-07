import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebase.config";
import { Signal, signal } from "@preact/signals-react";
import { Station } from "../../interfaces/station";

const db = getFirestore(app);

let lastUpdateDate: Date | null = null;
export const listStation: Signal<Station[]> = signal([]);
export class StationDataState {
  static getListSatation = async (): Promise<Station[]> => {
    const currentDate = new Date();
    if (!lastUpdateDate || currentDate.getHours() > lastUpdateDate.getHours()) {
      try {
        const querySnapshotGbaka = await getDocs(collection(db, "GaresGbaka"));
        const querySnapshotTaxi = await getDocs(collection(db, "GaresTaxi"));
        listStation.value = [];
        if (querySnapshotGbaka || querySnapshotTaxi) {
          listStation.value = [...querySnapshotGbaka.docs.map((doc, index) => ({
            id: index,
            libelle: doc.data().name,
            commune: doc.data().commune,
            type: doc.data().type,
            localisation: doc.data().location,
          }))];

          listStation.value = [
            ...listStation.value,
            ...querySnapshotTaxi.docs.map((doc, index) => ({
              id: index + listStation.value.length,
              libelle: doc.data().name,
              commune: doc.data().commune,
              type: doc.data().type,
              localisation: doc.data().location,
            })),
          ];
        }
      } catch (error) {
        alert(error);
      }
      lastUpdateDate = new Date();
    }

    return listStation.value;
  };
}
