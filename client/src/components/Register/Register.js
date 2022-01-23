import firebase from '../../utils/firebase'
import {useNavigate} from 'react-router-dom'

function Register() {

    let navigate = useNavigate()

    function onSubmitRegisterHandler(e){
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        firebase.auth().createUserWithEmailAndPassword(email,password)
           .then(data => navigate('/categories/All'))
    }

    return (
        <>
        <section className="register" onSubmit={onSubmitRegisterHandler}>
                <form >
                    <fieldset>
                        <legend>Register</legend>
                        <p className="field">
                            <label htmlFor="email">Username</label>
                            <span className="input">
                                <input type="email" name="email" id="email" placeholder="Email" />
                                <span className="actions"></span>
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password">Password</label>
                            <span className="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                                <span className="actions"></span>
                                <i className="fas fa-key"></i>
                            </span>
                        </p>
                        <input className="button" type="submit" className="submit" value="Register" />
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default Register