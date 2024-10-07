import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

// Функція для реєстрації користувача
export const handleRegister = async (
  name: string,
  surname: string,
  phoneNumber: string,
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Збереження додаткових даних користувача в Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      surname: surname,
      phoneNumber: phoneNumber,
      email: email,
    });

    return user;
  } catch (error) {
    console.error("Error during registration:", error);
    return null;
  }
};

export const handleLogin = async (
  email: string,
  password: string
): Promise<User | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User logged in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
};
