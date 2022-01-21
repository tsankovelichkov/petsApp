import firebase from "../../utils/firebase";

function Login() {

    function onLoginSubmitHandler(e) {
        e.preventDefault()
        let email = e.target.username.value
        let password = e.target.password.value

        firebase.auth().signInWithEmailAndPassword(email,password)
              .then(user => console.log(user))

    }

    return (
        <>
            <section className="login">
                <form onSubmit={onLoginSubmitHandler}>
                    <fieldset>
                        <legend>Login</legend>
                        <p className="field">
                            <label for="username">Username</label>
                            <span className="input">
                                <input type="text" name="username" id="username" placeholder="Username" />
                                <span className="actions"></span>
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                        <p className="field">
                            <label for="password">Password</label>
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