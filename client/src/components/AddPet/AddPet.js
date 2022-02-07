import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import * as petService from "../../services/petService";
import AuthContext from "../../contexts/Authcontext";


function AddPet() {

    let navigate = useNavigate()

    let {isAuth,userData} = useContext(AuthContext)

    function onSubmitAddPetHandler(e) {
        e.preventDefault()
        let name = e.target.name.value
        let description = e.target.description.value
        let image = e.target.image.value
        let category = e.target.category.value
        let email = userData

        petService.add(name, description, image, category, email)
            .then(res => navigate('/'))
    }
    return (
        <>
            <section className="create">
                <form onSubmit={onSubmitAddPetHandler}>
                    <fieldset>
                        <legend>Add new Pet</legend>
                        <p className="field">
                            <label htmlFor="name">Name</label>
                            <span className="input">
                                <input type="text" name="name" id="name" placeholder="Name" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea rows="4" cols="45" type="text" name="description" id="description"
                                    placeholder="Description"></textarea>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image</label>
                            <span className="input">
                                <input type="text" name="imageURL" id="image" placeholder="Image" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="category">Category</label>
                            <span className="input">
                                <select type="text" name="category">
                                    <option>Cat</option>
                                    <option>Dog</option>
                                    <option>Parrot</option>
                                    <option>Reptile</option>
                                    <option>Other</option>
                                </select>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <input className="button" type="submit" className="submit" value="Add Pet" />
                    </fieldset>
                </form>
            </section>
        </>
    );
}

export default AddPet;