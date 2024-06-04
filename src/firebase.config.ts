import { initializeApp } from "firebase/app";
 const firebaseConfig = {
  apiKey: "AIzaSyBxHLXqdyYyOactrf6qZU3xWJZ1A9jsG7o",
  authDomain: "mobilityplus-74105.firebaseapp.com",
  databaseURL: "https://mobilityplus-74105-default-rtdb.firebaseio.com",
  projectId: "mobilityplus-74105",
  storageBucket: "mobilityplus-74105.appspot.com",
  messagingSenderId: "714842411456",
  appId: "1:714842411456:web:810be731cdd5a85345f825",
  measurementId: "G-1RJK414WTC"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);