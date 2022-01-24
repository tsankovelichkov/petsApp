import { Link } from "react-router-dom"

function MyPetsCard({
    id,
    name,
    description,
    imageURL,
    category,
}) {
    return (
        <section className="myPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p className="img"><img src={imageURL} /></p>
            <p className="description">{description}</p>
            <div className="pet-info">
                <Link to={`/my-pets/${id}/delete`}><button className="button">Delete</button></Link>
                <Link to={`/my-pets/${id}/edit`}><button className="button">Edit</button></Link>
                <i className="fas fa-heart"></i> <span>5</span>
            </div>
        </section>
    )
}

export default MyPetsCard