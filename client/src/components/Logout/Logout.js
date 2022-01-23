import firebase from "../../utils/firebase"
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Logout(){

    let navigate = useNavigate()

    useEffect(() => {
        firebase.auth().signOut()
           .then(user => navigate('/categories/All'))
    }, [])

    return null
}

export default Logout