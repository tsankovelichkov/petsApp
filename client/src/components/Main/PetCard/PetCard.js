import {Link} from 'react-router-dom'

function PetCard(
    {
        _id,
        name,
        description,
        imageURL,
        category,
        likes

    }
) {
    return (
        <>
            <li className="otherPet">
                <h3>Name: {name}</h3>
                <p>Category: Cat</p>
                <p className="img"><img src={imageURL}/></p>
                <p className="description">{description}</p>
                <div className="pet-info">
                    <a href="#"><button className="button"><i className="fas fa-heart"></i> {category}</button></a>
                    <Link to={`/pets/details/${_id}`}><button className="button">Details</button></Link>
                    <i className="fas fa-heart"></i> <span> {likes}</span>
                </div>
            </li>
        </>
    );
}

export default PetCard;