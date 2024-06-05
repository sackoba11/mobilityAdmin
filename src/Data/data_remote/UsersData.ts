import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "../../firebase.config";
import { Signal, signal } from "@preact/signals-react";
import { AllUsers } from "../../interfaces/User";

const db = getFirestore(app);

export const listUsers: Signal<AllUsers[]> = signal([]);

export class UsersDataState {
  static getListBus = async (): Promise<AllUsers[]> => {
    try {
      const q=query(collection(db, "users"), where("isDriver","==",false))
      const querySnapshot = await getDocs(q);
      if (querySnapshot) {
        querySnapshot.docs.map((doc, index) => {
          listUsers.value.push({
            id: index,
            nom: doc.data().name,
            email: doc.data().email,
          });
        });
      } else {
        alert("error Liste Vide");
      }
    } catch (error) {
      alert(error);
    }

    return listUsers.value;
  };
}
