import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import * as petService from "../../services/petService";


function DeletePet() {
    let [pet,setPet] = useState([])

    let {id} = useParams()
    let navigate =  useNavigate()

    useEffect(() => {
      petService.getOne(id,'id')
         .then(res=>setPet(res))
    }, []);

    let [destructeredPet] = pet

    function onClickDeleteHandler(e){
        e.preventDefault()
        petService.deletePet(id)
           .then(res=>navigate('/my-pets'))
    }
  
    
    return (
        <>
          <section className="deletePet">
                <h3>{destructeredPet?.name}</h3>
                <p>Pet counter: <i className="fas fa-heart"></i> 5</p>
                <p className="img"><img src={destructeredPet?.imageURL}/></p>
                <form>
                    <p className="description">{destructeredPet?.description}</p>
                    <button className="button" onClick={onClickDeleteHandler}>Delete</button>
                </form>
            </section>
        </>
    );
}

export default DeletePet;