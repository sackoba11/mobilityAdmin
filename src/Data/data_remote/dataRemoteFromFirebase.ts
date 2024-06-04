import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebase.config";
import { Bus } from "../../interfaces/Bus";

const db = getFirestore(app);

export const listBus: Bus[] = [];

export const getListBus =async  (): Promise<Bus[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "listBus"));
    if (querySnapshot) {
      querySnapshot.docs.map((doc, index) => {
        listBus.push({
            id:index,
            numero:doc.data().number,
            source:doc.data().source,
            destination:doc.data().destination,
            itineraire:doc.data().roadMap,
            statut:doc.data().isActive

        });
       
      });
    } else {
      alert("error Liste Vide");
    }
  } catch (error) {
    alert(error);
  }

  return listBus;
};
