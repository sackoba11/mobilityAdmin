// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);