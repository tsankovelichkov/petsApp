import { useState, useEffect,useContext } from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import AuthContext from "../../contexts/Authcontext";


import DashboardNavigation from './DashboardNavigation/DashboardNavigation'
import * as petService from "../../services/petService";
import PetCard from './PetCard/PetCard';

function Main() {
    let [pets, setPets] = useState([])

    let {isAuth,userData} = useContext(AuthContext)

    let params = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        petService.getAll(params.category)
            .then(res => {
                if (res.length == 0) {
                    navigate('/categories/All')
                } else {
                    let filterArray = res.filter(obj => obj.email != userData)
                    setPets(filterArray)
                }
            })
    }, [params])



    return (
        <>
            <main id="site-content">
                {isAuth
                    ? (<section className="dashboard">
                        <h1>Dashboard</h1>
                        <DashboardNavigation />
                        <ul class="other-pets-list">
                            {pets.map(x => <PetCard key={x.id} userEmail={userData} {...x} />)}
                        </ul>
                    </section>)
                    : (<section class="basic">
                        <h1> Welcome to pet my pet!</h1>
                    </section>)}
            </main>
        </>
    );
}

export default Main;