import {firebase} from '../config/databaseConfig'

// ----------------------create event 
async function createDocument(collectionName, documentData) {
  const db = firebase.firestore();

  const docRef = await db.collection(collectionName).add(documentData);
  return docRef.id;
}

async function readDocument(collectionName, documentId) {
  const db = firebase.firestore();

  const docRef = db.collection(collectionName).doc(documentId);
  const documentSnapshot = await docRef.get();

  if (documentSnapshot.exists) {
    return documentSnapshot.data();
  } else {
    return null;
  }
}

async function updateDocument(collectionName, documentId, documentData) {
  const db = firebase.firestore();

  const docRef = db.collection(collectionName).doc(documentId);
  await docRef.update(documentData);
}

async function deleteDocument(collectionName, documentId) {
  const db = firebase.firestore();

  const docRef = db.collection(collectionName).doc(documentId);
  await docRef.delete();
}

export {createDocument , updateDocument , readDocument , deleteDocument }