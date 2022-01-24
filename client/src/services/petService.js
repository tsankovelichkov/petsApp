import uniqid from 'uniqid'

export const getAll = (pet) => {
    let url = `http://localhost:3000/pets?category=${pet}`
    if (pet == 'All') {
        url = "http://localhost:3000/pets"
    }

    return fetch(url)
        .then(res => res.json())
}


export const getOne = (id,searchName) => {
    
    let url = `http://localhost:3000/pets?${searchName}=${id}`

    return fetch(url)
        .then(res => res.json())
}

export const add = (name, description, imageURL, category,email) => {
    return fetch('http://localhost:3000/pets', {
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            id:uniqid(),
            name, 
            description, 
            imageURL, 
            category,
            email
        })
    })
}