// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.MI_API_KEY,
  authDomain: process.env.MI_AUTH_DOMAIN,
  projectId: process.env.MI_PROYECT_ID,
  storageBucket: process.env.MI_STORAGE_BUCKET,
  messagingSenderId: process.env.MI_MESSAGING_SENDER_ID,
  appId: process.env.MI_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getData() {
    const productsRef = collection(db, "products")
    const productsSnapshot = await getDocs(productsRef)
    // console.log(productsSnapshot.docs[0].data());
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map(item => {
      return { ...item.data(), id: item.id}
    })
    console.log(dataDocs);
    return dataDocs
}

export default getData;

/////////////////

  // apiKey: process.env.MI_API_KEY,
  // authDomain: process.env.MI_AUTH_DOMAIN,
  // projectId: process.env.MI_PROYECT_ID,
  // storageBucket: process.env.MI_STORAGE_BUCKET,
  // messagingSenderId: process.env.MI_MESSAGING_SENDER_ID,
  // appId: process.env.MI_APP_ID

/////////////

export async function getProductById( id ) {
    const docRef = doc(db, "products", id)
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    return {...docData, id: docData.id};
}

/////////////////////

export async function getProductsByCategory( categParam ) {
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", categParam))
    const productsSnapshot = await getDocs(q)
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map(item => {
      return { ...item.data(), id: item.id}
    })
    return dataDocs;
}