export const getAll = (pet) =>{
    let url = `http://localhost:3000/pets?category=${pet}`
    if(pet=='All'){
        url="http://localhost:3000/pets"
    }

    return fetch(url)
           .then(res=>res.json())
}


export const getOne = (id) =>{
    let url = `http://localhost:3000/pets?_id=${id}`
    
    return fetch(url)
           .then(res=>res.json())
}