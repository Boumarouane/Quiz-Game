import React, {useState, useEffect, useContext} from 'react';
import { FirebaseContext } from '../firebase/Encapsule';

const Logout = () => {

    const firebase = useContext(FirebaseContext);

    
    const [checked, setChecked] = useState(false);

        useEffect(() => {
            if(checked){
                firebase.logoutUser()
            }
        }, [checked,firebase])

    const handleChange = e => {
        setChecked(e.target.checked);
    }

    return (
        <div className="logoutContainer">
            <label className="switch">
                <input  onChange={handleChange} type="checkbox" checked={checked}/>
                <span className="slider round" data-tip="Déconnexion"></span>
            </label>
        </div>
    )
}

export default Logout
