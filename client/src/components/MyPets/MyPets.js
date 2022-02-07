import {useEffect,useState,useContext} from "react"
import * as petService from "../../services/petService";
import MyPetsCard from "./MyPetsCard/MyPetsCard";
import AuthContext from "../../contexts/Authcontext";


function MyPets() {

    const [myPetsData,setMyPetsData] = useState([])

    let {isAuth,userData} = useContext(AuthContext)

    useEffect(() => {
        petService.getOne(userData,'email')
           .then(res=>setMyPetsData(res))
    }, []);



    return (
        <section className="my-pets">
            <h1>My Pets</h1>
            <ul class="my-pets-list">
               {myPetsData?.map(x => <MyPetsCard key={x.id} {...x} />)}
            </ul>
        </section>
    )
}

export default MyPets