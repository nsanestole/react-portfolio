import { useState } from "react";

const Ingredient = ({ingredientName}) => {

    const [name, setName] = useState(ingredientName);
    return(
             <li class="list-group-item" style={{}}>{name}</li>
    );
}

export default Ingredient;