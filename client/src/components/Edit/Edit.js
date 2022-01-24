import { useParams, useNavigate } from "react-router-dom"
import { useEffect,useState } from "react";
import * as petService from "../../services/petService";



function Edit() {

    let [petData,setPetData]=useState([])

    let { id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        petService.getOne(id,"id")
           .then(res=>setPetData(res))
    }, []);
    

    function onSubmitEditHandler(e) {
        e.preventDefault()
        let description = e.target.description.value
        petService.edit(description, id)
            .then(res => navigate('/my-pets'))
    }

    let [petInfo] = petData

    return (
        <section className="detailsMyPet">
            <h3>{petInfo?.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> 6</p>
            <p className="img"><img src={petInfo?.imageURL} /></p>
            <form onSubmit={onSubmitEditHandler}>
                <textarea type="text" name="description" defaultValue={petInfo?.description}></textarea>
                <button className="button">Save</button>
            </form>
        </section>
    )
}

export default Edit