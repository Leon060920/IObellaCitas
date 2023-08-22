import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const coleccioncitaref = collection(db, "citas");
class serviciocita {
  AgregCitas = (citanueva) => {
    return addDoc(coleccioncitaref, citanueva);
  };

  updateCita = (id, updatedcitas) => {
    const CitaDoc = doc(db, "citas", id);
    return updateDoc(CitaDoc, updatedcitas);
  };

  deleteCita = (id) => {
    const CitaDoc = doc(db, "citas", id);
    return deleteDoc(CitaDoc);
  };

  getAllCitas = () => {
    return getDocs(coleccioncitaref);
  };

  getCita = (id) => {
    const CitaDoc = doc(db, "citas", id);
    return getDoc(CitaDoc);
  };
}

export default new serviciocita();
