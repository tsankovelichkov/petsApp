import firebase from '../../utils/firebase'
import {useNavigate} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    let navigate = useNavigate()

    const notify = () => {
        toast.error("There is an a account with this email", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    function onSubmitRegisterHandler(e){
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        firebase.auth().createUserWithEmailAndPassword(email,password)
           .then(data => navigate('/categories/All'))
           .catch(err=>notify())
    }

    return (
        <>
        <section className="register" onSubmit={onSubmitRegisterHandler}>
                <form >
                    <ToastContainer />
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