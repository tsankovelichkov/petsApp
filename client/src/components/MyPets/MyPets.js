import {useEffect,useState} from "react"
import * as petService from "../../services/petService";
import MyPetsCard from "./MyPetsCard/MyPetsCard";


function MyPets({user}) {

    const [myPetsData,setMyPetsData] = useState([])

    useEffect(() => {
        petService.getOne(user.userData,'email')
           .then(res=>setMyPetsData(res))
    }, []);



    return (
        <section class="my-pets">
            <h1>My Pets</h1>
            <ul class="my-pets-list">
               {myPetsData?.map(x => <MyPetsCard key={x.id} {...x} />)}
            </ul>
        </section>
    )
}

export default MyPets