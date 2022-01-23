import firebase from "../../utils/firebase";
import {useNavigate} from 'react-router-dom'


function Login() {

    let navigate = useNavigate()

    function onLoginSubmitHandler(e) {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value

        firebase.auth().signInWithEmailAndPassword(email,password)
              .then(user => navigate('/'))

    }

    return (
        <>
            <section className="login">
                <form onSubmit={onLoginSubmitHandler}>
                    <fieldset>
                        <legend>Login</legend>
                        <p className="field">
                            <label htmlFor="email">Username</label>
                            <span className="input">
                                <input type="text" name="email" id="email" placeholder="Email" />
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
                        <input className="button" type="submit" className="submit" value="Login" />
                    </fieldset>
                </form>
            </section>
        </>
    );
}

export default Login;