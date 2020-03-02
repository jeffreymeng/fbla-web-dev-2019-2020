import React, { useCallback, useEffect, useState } from "react"

const firebaseConfig = {
  apiKey: "AIzaSyAxwtWhP9KDXEiqV2pAk67O2d-fnDDmxMg",
  authDomain: "fbla-website-design-2020.firebaseapp.com",
  databaseURL: "https://fbla-website-design-2020.firebaseio.com",
  projectId: "fbla-website-design-2020",
  storageBucket: "fbla-website-design-2020.appspot.com",
  messagingSenderId: "336349869076",
  appId: "1:336349869076:web:ac05b19b25c05f96b06301",
  measurementId: "G-5BBC2V2HZE",
}

const AuthContext = React.createContext({
  user: null,
  signIn: () => {
  },
  signOut: () => {
  },
  signUp: () => {
  },
  loading: false,
  error: null,
});

const AuthProvider = ({ children }) => {
  const [firebase, setFirebase] = useState(undefined);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!firebase && typeof window !== "undefined") {
      const app = import("firebase/app");
      const auth = import("firebase/auth");
      const firestore = import("firebase/firestore");

      Promise.all([
        app, auth, firestore
      ]).then(values => {
        const instance = values[0];
        instance.initializeApp(firebaseConfig);
        setFirebase(instance);
      });
    }
  }, []);

  useEffect(() => {
    if (!firebase) return;

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setLoading(false);
      setUser(user);
    })
    return () => unsubscribe()
  }, [firebase]);

  const signIn = useCallback((email, pass) => {
    setLoading(true);
    setError(null);
    return firebase.auth().signInWithEmailAndPassword(email, pass).catch(e => {
      setLoading(false);
      setError(e.message);
    });
  }, [firebase]);

  const signOut = useCallback(() => {
    firebase.auth().signOut();
  }, [firebase]);

  const signUp = useCallback((email, pass) => {
    setError(null);
    setLoading(true);
    return firebase.auth().createUserWithEmailAndPassword(email, pass).catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, [firebase]);

  return (
    <AuthContext.Provider
      value={{
        user, signIn, signOut, signUp, loading, error
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthProvider }