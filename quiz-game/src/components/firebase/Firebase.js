import app from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBK04YWfRocrf8Xi6moMOgWdJbGoG3r-wU",
    authDomain: "quiz-game-f784c.firebaseapp.com",
    databaseURL: "https://quiz-game-f784c.firebaseio.com",
    projectId: "quiz-game-f784c",
    storageBucket: "quiz-game-f784c.appspot.com",
    messagingSenderId: "523624038699",
    appId: "1:523624038699:web:7d7ee0278ef7d2d292c56e"
  };

class Firebase {



    constructor() {
        app.initializeApp(firebaseConfig)
            // this.auth = app.auth()
            // this.db = app.firestore()
    }

    // // Inscription
    // signupUser = (email, password) =>
    // this.auth.createUserWithEmailAndPassword(email, password)

    // // Connexion
    // loginUser = (email, password) =>
    // this.auth.signInWithEmailAndPassword(email, password)

    // // Déconnexion
    // signOutUser = () => this.auth.signOut()

    // // Récupèration du MDP
    // passwordReset = email => this.auth.sendPasswordResetEmail(email);

    // // Stockage dans la BDD via la reference 'users/+ l'id obtenu dans l'envoi des données lors de l'inscription'
    // user = uid => this.db.doc(`'users/${uid}`);
}

export default Firebase;