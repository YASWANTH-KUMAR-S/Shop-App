import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,signOut,onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc,collection,writeBatch, query,getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbHVQuyE2rKJ22Pk1u3WZZt_kxd32kYac",
    authDomain: "shop-app-db-96d30.firebaseapp.com",
    projectId: "shop-app-db-96d30",
    storageBucket: "shop-app-db-96d30.appspot.com",
    messagingSenderId: "409785394534",
    appId: "1:409785394534:web:11c4c598a07b1f98fd14a7"
  };

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();


export const addCollectionAndDocument=async (collectionKey,objectsToAdd)=>{
  const collectionRef=collection(db,collectionKey);
  const batch=writeBatch(db);

objectsToAdd.forEach((object)=>{
  const docRef=doc(collectionRef,object.title.toLowerCase());
  batch.set(docRef,object);
})
await batch.commit();
console.log('done');

}

export const getCategoriesAndDocuments=async()=>{
  const collectionRef=collection(db,'categories');
  const q=query(collectionRef);

  const querySnapShot=await getDocs(q);
  const categoryMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const {title,items}=docSnapShot.data();
    acc[title.toLowerCase()]=items;
    return acc;
  },{})

return categoryMap;
}





















export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser=async ()=> signOut(auth);


export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback);
/*const firebaseConfig = {
    apiKey: "AIzaSyAbHVQuyE2rKJ22Pk1u3WZZt_kxd32kYac",
    authDomain: "shop-app-db-96d30.firebaseapp.com",
    projectId: "shop-app-db-96d30",
    storageBucket: "shop-app-db-96d30.appspot.com",
    messagingSenderId: "409785394534",
    appId: "1:409785394534:web:11c4c598a07b1f98fd14a7"
  };*/