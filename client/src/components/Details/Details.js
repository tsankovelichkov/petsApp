import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'

import * as petService from "../../services/petService";

function Details() {

    let [pet,setPet] = useState({})

    let {id} = useParams()

    useEffect(() => {
        petService.getOne(id)
          .then(res=>setPet(res))
    },[])

    console.log(pet)
   

    return (
        <section className="detailsOtherPet">
            <h3>{pet[0]?.name}</h3>
            <p>Pet counter: 7 <a href="#"><button className="button"><i className="fas fa-heart"></i>
                Pet</button></a>
            </p>
            <p className="img"><img src= {pet[0]?.imageURL} /></p>
            <p className="description">{ pet[0]?.description}</p>
        </section>
    )
}

export default Details