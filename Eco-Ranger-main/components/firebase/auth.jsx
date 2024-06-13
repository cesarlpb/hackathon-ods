import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
  db,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "./firebase";

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    sendEmailVerification(userCredential.user);
    const user = userCredential.user;
    // await initializeUserData(user.uid);

    return user.uid;
  } catch (err) {
    return err.message;
  }
};

export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const u = await getUserById(user.uid);
    if (!u) {
      await initializeUserData(user.uid);
    }
    return user.uid;
  } catch (err) {
    return err.message;
  }
};

export const checkEmailAndPass = async (email, password) => {
  const r = await fetchSignInMethodsForEmail(auth, email);
  if (r.includes("google.com")) {
    return "google.com";
  }
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user.uid;
  } catch (err) {
    return err.message;
  }
};

export const getCurrentUserId = async () => auth.currentUser ? auth.currentUser.uid : null;

export const logout = async () => await signOut(auth);

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const { idToken, type } = await auth.signInWithPopup(provider);
    if (type === 'success') {
      const credential = GoogleAuthProvider.credential(idToken);
      const authResult = await signInWithCredential(auth, credential);
      const user = authResult.user;
      const u = await getUserById(user.uid);
      if (!u) {
        await initializeUserData(user.uid);
      }
      return user.uid;
    } else {
      throw new Error('Google sign-in failed');
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const initializeUserData = async (uid) => {
  await setDoc(doc(db, "users", uid), {});
  await setDoc(doc(db, "users", uid, "targetCatInfo", "pull"), {
    nextFirstTiredMuscle: "Latissimus dorsi",
    lastTrainedTime: 0,
  });
  await setDoc(doc(db, "users", uid, "targetCatInfo", "push"), {
    nextFirstTiredMuscle: "Pectoralis major",
    lastTrainedTime: 0,
  });
  await setDoc(doc(db, "users", uid, "targetCatInfo", "core"), {
    nextFirstTiredMuscle: "Upper abs",
    lastTrainedTime: 0,
  });
  await setDoc(doc(db, "users", uid, "targetCatInfo", "leg"), {
    nextFirstTiredMuscle: "Quadriceps (squats variants)",
    lastTrainedTime: 0,
  });
};

export const getUserById = async (id) => {
  const docRef = doc(db, "users", id);
  const result = await getDoc(docRef);
  return result.exists() ? result.data() : null;
};

export const updateUser = async (id, obj) => {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, obj);
};

export const sendPass = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return "Email sent";
  } catch (error) {
    return error.message;
  }
};
