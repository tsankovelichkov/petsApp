import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';


import DashboardNavigation from './DashboardNavigation/DashboardNavigation'
import * as petService from "../../services/petService";
import PetCard from './PetCard/PetCard';

function Main({ user }) {
    let [pets, setPets] = useState([])

    let params = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        petService.getAll(params.category)
            .then(res => {
                if(res.length==0){
                    navigate('/categories/All')
                }else{
                    setPets(res)
                }
            })
    }, [params])

   

    return (
        <>
            <main id="site-content">
                {user.isAuth
                    ? (<section className="dashboard">
                        <h1>Dashboard</h1>
                        <DashboardNavigation />
                        <ul class="other-pets-list">
                            {pets.map(x => <PetCard key={x.id} {...x} />)}
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