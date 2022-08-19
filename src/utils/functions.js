import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore/lite"

const joinCommunity = async (data) => {
    const community = collection(db, 'community');
    const q = query(community, where("email", "==", data?.email));
    const docSnap = await getDocs(q);
    console.log(q, docSnap)
    if (docSnap.empty) {
        return addDoc(community, data).then((res) => {
            return {
                success: true,
                message: 'Yayyyy!! Welcome to BiT. You should receive a welcome email from us shortly.'
            }
        }).catch((error) => {
            return error
        })
    } else {
        return {
            success: false,
            message: 'You are already a member of BiT!'
        }
    }
}

export { joinCommunity }