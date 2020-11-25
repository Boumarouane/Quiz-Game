import React, {useState, useContext, useEffect} from "react";
import Button from "../Button/Button";
import styled from "styled-components";
import imgBackground from "../images/923.jpg";
import QuizGameSvg from "../SVG/QuizGameSvg";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../firebase/Encapsule";


const Container = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ContainerOne = styled.div`
  background-image: url(${imgBackground});
  background-size: 100% 100%;
  width: 100%;
  height: 100%;

`;

const ContainerTwo = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const LinkTexte = styled(Link)`
/* text-decoration:none; */
color:black;
`

const Login = (props) => {
  
  const firebase = useContext(FirebaseContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (password.length > 5 && email !== ''){
      setErrorPassword(true)
    } else if (errorPassword){
      setErrorPassword(false)
    }
  }, [password, email,errorPassword])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .loginUser(email, password)
      .then(user => {
        console.log(user)
        setEmail('')
        setPassword('')
        props.history.push("/welcome")
      })
      .catch((error) => {
        setError(error)
        setEmail('')
        setPassword('')
      });
  };
  return (
    <Container>
      <ContainerOne>
        <QuizGameSvg
          className="inscriptionSvg"
          texteOne="Connexion"
          positionX="50%"
          positionY="50%"
        />
      </ContainerOne>
      <ContainerTwo onSubmit={handleSubmit}>

      {error !== '' && <span>{error.message}</span>}

      <div className="body">
          <div className="form">
            <input
              onChange={e => setEmail(e.target.value)}
              name="text"
              value={email}
              type="email"
              autoComplete="off"
              required
            />
            <label className="label-name" htmlFor="email">
              <span className="content-name">email</span>
            </label>
          </div>
        </div>

        {errorPassword ? <p style={{color:"red"}}>Holala</p> : null}

        <div className="body">
          <div className="form">
            <input
              onChange={e => setPassword(e.target.value)}
              name="text"
              value={password}
              type="password"
              autoComplete="off"
              required
            />
            <label className="label-name" htmlFor="password">
              <span className="content-name">Mot de passe</span>
            </label>
          </div>
        </div>

        <p>Mot de passe oublié ? 
            <LinkTexte to="/recovery"> Récupérez-le ici</LinkTexte></p>
        <Button
          texte="Connexion"
          width="20rem"
          height="3em"
          fontSize="20px"
          maxWidth="18rem"
          link="/welcome"
        />
        <p>Nouveau sur Quiz Game ? <LinkTexte to="/signup">Inscrivez-vous maintenant</LinkTexte></p>
      </ContainerTwo>
    </Container>
  );
};

export default Login;
