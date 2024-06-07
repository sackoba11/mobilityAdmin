import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebase.config";
import { Bus } from "../../interfaces/Bus";
import { Signal, signal } from "@preact/signals-react";

const db = getFirestore(app);

let lastUpdateDate:Date|null=null;
export const listBus: Signal<Bus[]> = signal([]);

export class BusDataState{
  
   static getListBus = async () => {
    const currentDate=new Date();
    if(!lastUpdateDate || currentDate.getSeconds()>lastUpdateDate.getSeconds()){
      try {
        const querySnapshot = await getDocs(collection(db, "listBus"));
        listBus.value=[];
        if (querySnapshot) {
          listBus.value=[...querySnapshot.docs.map((doc, index) => ({
              id: index,
              numero: doc.data().number,
              source: doc.data().source,
              destination: doc.data().destination,
              itineraire: doc.data().roadMap,
              statut: doc.data().isActive,
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
  
    return  listBus.value ;
  };
}

