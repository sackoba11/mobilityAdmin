import {
  collection,
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

let lastUpdateDate: Date | null = null;
export const listUsers: Signal<AllUsers[]> = signal([]);
export class UsersDataState {
  static getListUsers = async (): Promise<AllUsers[]> => {
    const currentDate = new Date();
    if (!lastUpdateDate || currentDate.getHours() > lastUpdateDate.getHours()) {
      try {
        listUsers.value = [];
        const q = query(
          collection(db, "users"),
          where("isDriver", "==", false)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot) {
          listUsers.value = [
            ...querySnapshot.docs.map((doc, index) => ({
              id: index,
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

    return listUsers.value;
  };

  static loaderUsers = () => {
    return defer({ usersListPromise: UsersDataState.getListUsers() });
  };
}
