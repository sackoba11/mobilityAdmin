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
import { Signal, signal } from "@preact/signals-react";
import { Location, Station, StationToFirebase } from "../../interfaces/station";
import { defer } from "react-router-dom";

const db = getFirestore(app);
const dbRefGbaka = collection(db, "GaresGbaka");
const dbRefTaxi = collection(db, "GaresTaxi");
let lastUpdateDate: Date | null = null;
export const listStation: Signal<Station[]> = signal([]);


export class StationDataState {
  static getListStation = async (): Promise<Station[]> => {
    const currentDate = new Date();
    if (!lastUpdateDate || currentDate.getSeconds() > lastUpdateDate.getSeconds()) {
      try {
        const querySnapshotGbaka = await getDocs(dbRefGbaka);
        const querySnapshotTaxi = await getDocs(dbRefTaxi);
        listStation.value = [];
        if (querySnapshotGbaka || querySnapshotTaxi) {
          listStation.value = [
            ...querySnapshotGbaka.docs.map((doc, index) => ({
              id: doc.id,
              index: index,
              libelle: doc.data().name,
              commune: doc.data().commune,
              type: doc.data().type,
              localisation: doc.data().location,
            })),
          ];

          listStation.value = [
            ...listStation.value,
            ...querySnapshotTaxi.docs.map((doc, index) => ({
              id: doc.id,
              index: index,
              libelle: doc.data().name,
              commune: doc.data().commune,
              type: doc.data().type,
              localisation: doc.data().location,
            })),
          ];
        }
      } catch (error) {
        console.log(error);
      }
      lastUpdateDate = new Date();
    }

    return listStation.value;
  };

  static loaderStation = () => {
    return defer({ stationListPromise: StationDataState.getListStation() });
  };

  static addStation = async (data: any): Promise<void> => {
    const search = ",";
    const location = data[4];

    const locationSplited = location.split(search);
    const lat = locationSplited[0];
    const long = locationSplited[1];
    const locationData: Location = {
      label: "teste localisation",
      lat: lat.trim(),
      long: long.trim(),
    };

    const dataStation: StationToFirebase = {
      name: data[1],
      commune: data[2],
      type: data[3],

      location: locationData,
    };

    try {
      if (dataStation.type.toLowerCase() == "taxi") {
        const docref = await addDoc(dbRefTaxi, dataStation);
        console.log(docref.id);
      } else {
        const docref = await addDoc(dbRefGbaka, dataStation);
        console.log(docref.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  static deletteStation = async (idStation:string): Promise<void> => {
    try {
      await deleteDoc(doc(db, "GaresTaxi", idStation));
       this.getListStation()
    } catch (error) {
      console.log("erreur:",error);
    }
  };
}
