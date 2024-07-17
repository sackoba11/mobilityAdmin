import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../../firebase.config";
import { Signal, signal } from "@preact/signals-react";
import { AllUsers } from "../../interfaces/User";
import { defer } from "react-router-dom";

const db = getFirestore(app);
const refDb= collection(db, "users");
let lastUpdateDate: Date | null = null;
export const listUsers: Signal<AllUsers[]> = signal([]);
export class UsersDataState {
  static getListUsers = async (): Promise<AllUsers[]> => {
    const currentDate = new Date();
    if (!lastUpdateDate || currentDate.getSeconds() > lastUpdateDate.getSeconds()) {
      try {
        listUsers.value = [];
        const q = query(
          refDb,
          where("isDriver", "==", false)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot) {
          listUsers.value = [
            ...querySnapshot.docs.map((doc, index) => ({
              id: doc.id,
              index:index,
              nom: doc.data().name,
              email: doc.data().email,
            })),
          ];
        } else {
          alert("error Liste Vide");
        }
      } catch (error) {
        console.log(error);
      }
      lastUpdateDate = new Date();
    }

    return listUsers.value;
  };

  static loaderUsers = () => {
    return defer({ usersListPromise: UsersDataState.getListUsers() });
  };

  static deleteUser = async (idUser:string): Promise<void> => {
    try {
      await deleteDoc(doc(db, "users" , idUser));
    } catch (error) {
      console.log("erreur:",error);
    }
  };
}
