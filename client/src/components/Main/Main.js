import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';


import DashboardNavigation from './DashboardNavigation/DashboardNavigation'
import * as petService from "../../services/petService";
import PetCard from './PetCard/PetCard';

function Main() {
    let [pets,setPets] = useState([])

    let params = useParams()

    useEffect(() => {
        petService.getAll(params.category)
       .then(res=>setPets(res))
    },[params])

    

    return (
        <>
            <main id="site-content">
                <section className="dashboard">
                    <h1>Dashboard</h1>
                    <DashboardNavigation />
                    <ul class="other-pets-list">
                        {pets.map(x=><PetCard key={x._id} {...x}/>)}
                    </ul>
                </section>
            </main>
        </>
    );
}

export default Main;