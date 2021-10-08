import { useState } from "react";

const Ingredient = ({ingredientName}) => {

    const [name, setName] = useState(ingredientName);
    return(
        <div>
            <label for="ingr">Ingredient N.</label>
            <p>{name}</p>
        </div>
    );
}

export default Ingredient;