function MyPetsCard({
    id,
    name,
    description,
    imageURL,
    category,
}) {
    return (
        <section class="myPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p class="img"><img src={imageURL} /></p>
            <p class="description">{description}</p>
            <div class="pet-info">
                <a href="#"><button class="button">Delete</button></a>
                <a href="#"><button class="button">Edit</button></a>
                <i class="fas fa-heart"></i> <span>5</span>
            </div>
        </section>
    )
}

export default MyPetsCard