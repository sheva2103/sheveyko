
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
import { db } from './../firebase';

export const authAPI = {
    signUp(email, password) {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
            
    },

    signIn(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    },

    signOut() {
        const auth = getAuth();
        return signOut(auth)
    }
}

export const photoAPI = {

    addPhoto(photo) {
        return setDoc(doc(db, "photos", photo.id), photo);
    },
    async getPhotos() {
        let photos = []
        const querySnapshot = await getDocs(collection(db, "photos"));
            querySnapshot.forEach((doc) => {
                //console.log(doc.id, " => ", doc.data());
                photos.push(doc.data())
        })
        return photos
    },
    async deletPhoto(id) {
        await deleteDoc(doc(db, "photos", id));

    }
}

export const homeAPI = {
    changeInfo(text) {
        const docRef = doc(db, 'homeInfo', text.id);
        return updateDoc(docRef, {
            p1: text.p1,
            p2: text.p2
            })
    },
    async getInfo() {
        let resultArr = []
        const q = query(collection(db, "homeInfo"));
        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                //console.log(doc.id, " => ", doc.data());
                resultArr.push(doc.data())
            });
        return resultArr
    }
}

export const activityAPI = {
    addPresentation(presentation) {
        return setDoc(doc(db, "presentation", presentation.id), presentation);
    },
    async getPresentations() {
        let resultArr = []
        const q = query(collection(db, "presentation"));
        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                //console.log(doc.id, " => ", doc.data());
                resultArr.push(doc.data())
            });
        return resultArr
    },
    async deletPresentation(id) {
        await deleteDoc(doc(db, "presentation", id));
    },
    addPublication(publication) {
        return setDoc(doc(db, "publication", publication.id), publication);
    },
    async getPublication() {
        let resultArr = []
        const q = query(collection(db, "publication"));
        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                resultArr.push(doc.data())
            });
        return resultArr
    },
    async deletePublication(id) {
        await deleteDoc(doc(db, "publication", id));
    },
    addClassActivity(activity) {
        return setDoc(doc(db, "classActivity", activity.id), activity);
    },
    async getClassActivity() {
        let resultArr = []
        const q = query(collection(db, "classActivity"));
        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                resultArr.push(doc.data())
            });
        return resultArr
    },
    async deleteClassActivity(id) {
        await deleteDoc(doc(db, "classActivity", id));
    },
}