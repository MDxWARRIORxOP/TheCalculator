import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.messurementId,
};

const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);

/**
 *  @param {String} collectionName String, name of the collection to add data to.
 *  @param {String} docName String, name of the document to add data to.
 *  @param {object} dataObj JS object, the data to add to the document.
 *  @example await addData("users", "test", {hello: "world"})
 **/
const addData = async (collectionName, docName, dataObj) => {
  try {
    await firestore.setDoc(firestore.doc(db, collectionName, docName), dataObj);
    return true;
  } catch (error) {
    console.log("error:", error);
    return false;
  }
};

/**
 *  @param {String} collectionName String, name of the collection to get a doc from.
 *  @param {String} docName String, name of the doc ot get data from.
 *  @example getData("users", "Kingerious")
 *  @returns if no data is found, returns false, if data is found, returns the document data as a JS Object
 **/
const getData = async (collectionName, docName) => {
  try {
    const docRef = firebase.doc(db, collectionName, docName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return false;
    }
  } catch (error) {
    console.log("error:", error);
    return false;
  }
};

export { addData, getData };
