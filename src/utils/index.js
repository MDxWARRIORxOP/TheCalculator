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
 *  @returns data Reference
 **/
const addData = async (collectionName, docName, dataObj) => {
  const dataRef = db.collection(collectionName).doc(docName);

  const dataSet = await dataRef.set(dataObj);
  console.log(dataSet);
  return dataSet;
};

/**
 *  @param {String} collectionName String, name of the collection to get a doc from.
 *  @param {String} docName String, name of the doc ot get data from.
 *  @example getData("users", "Kingerious")
 *  @returns if no data is found, returns null, if data is found, returns the document data as a JS Object
 **/
const getData = async (collectionName, docName) => {
  const dataRef = db.collection(collectionName).doc(docName);
  const doc = await dataRef.get();
  if (!doc.exists) {
    return null;
  } else {
    return doc.data();
  }
};

export { addData, getData };
