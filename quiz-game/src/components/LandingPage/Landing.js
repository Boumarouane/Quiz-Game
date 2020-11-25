import React, {useState, useContext, useEffect} from "react";
import Logout from "../Logout/Logout";
import { FirebaseContext } from "../firebase/Encapsule";


const Landing = props => {

    const firebase = useContext(FirebaseContext)

    const [userSession, setUserSession] = useState(null)

    useEffect(() => {
       let listener = firebase.auth.onAuthStateChanged(user => {
           user ? setUserSession(user) : props.history.push("/")
       })
        return () => {
            listener
        }
    }, [])

    return userSession === null ? (
        <>
            <div className="loader"></div>
            <p>Loading...</p>
        </>
    ) : (
        <div className="quiz-bg">
        <div className="container">
          <Logout />
        </div>
      </div>
    )
};

export default Landing;
