import firebase from "../../utils/firebase";
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {

    let navigate = useNavigate()

    const notify = () => {
        toast.error("You're email or password is invalid!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    function onLoginSubmitHandler(e) {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => navigate('/'))
            .catch(err => notify())

    }

    return (
        <>
            <section className="login">
                <form onSubmit={onLoginSubmitHandler}>
                    <ToastContainer />
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