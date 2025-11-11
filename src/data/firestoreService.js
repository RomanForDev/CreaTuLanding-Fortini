// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_APIKEY,
  authDomain: import.meta.env.VITE_FS_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FS_PROYECTID,
  storageBucket: import.meta.env.VITE_FS_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FS_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FS_APPID
};
// Leak porque el env no funciona.
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

export async function createBuyOrder(orderData){
  const ordersRef = collection(db, "orders")
  const newDoc = await addDoc(ordersRef, orderData)
  return newDoc;
}

  // apiKey: import.meta.env.VITE_FS_APIKEY,
  // authDomain: import.meta.env.VITE_FS_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_FS_PROYECTID,
  // storageBucket: import.meta.env.VITE_FS_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_FS_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_FS_APPID
