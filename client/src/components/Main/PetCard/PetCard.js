import { Link } from 'react-router-dom'
import { useState } from 'react';
import * as petService from "../../../services/petService";


function PetCard(
    {
        id,
        name,
        description,
        imageURL,
        category,
        likes,
        userEmail
    }
) {

    let [petLikes, setPetLikes] = useState(likes.length)

    function onClickLikesHandler(e) {
        e.preventDefault()
        petService.getOne(id, 'id')
            .then(res => {
                let [petData] = res
                if (!petData.likes.includes(userEmail)) {
                    petData.likes.push(userEmail)
                    petService.edit('likes', petData.likes, id)
                        .then(res => setPetLikes(petData.likes.length))
                }
            })
    }


    return (
        <>
            <li className="otherPet">
                <h3>Name: {name}</h3>
                <p>Category: Cat</p>
                <p className="img"><img src={imageURL} /></p>
                <p className="description">{description}</p>
                <div className="pet-info">
                    <a href="#"><button className="button" onClick={onClickLikesHandler}><i className="fas fa-heart"></i> {category}</button></a>
                    <Link to={`/pets/details/${id}`}><button className="button">Details</button></Link>
                    <i className="fas fa-heart"></i> <span> {petLikes}</span>
                </div>
            </li>
        </>
    );
}

export default PetCard;