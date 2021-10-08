import { useEffect, useState } from "react";
import Ingredient from "./Ingredient";

const IngredientCard = () => {

    const [ingredientList, setIngredientList] = useState([]);

    const updateList = (e) => {
        e.preventDefault();
        const alert = document.getElementById('listAlert');
        if(ingredientList.length < 5)
        {   
            if(ingredientList.includes(e.target.ingredient.value))
            {
               alert.innerText = "You cant have 2 same ingredients";
               alert.hidden = false;
            } else {
               var temp = ingredientList.slice();
               temp.push(e.target.ingredient.value);
               setIngredientList(temp);
               alert.hidden = true;
            }
        }
        else {
            alert.innerText = "You cant have more than 5 ingredients";
            alert.hidden = false;
        }
        const ingrElem = document.getElementById('newIngr');
        ingrElem.value = '';
    }

    useEffect(() => {
        
    },[ingredientList]);

    return(
        <div>
            {ingredientList && ingredientList.map(ingr =>
                <Ingredient ingredientName={ingr}/>
                )}
            <div hidden={true} id="listAlert"></div>
            <form onSubmit={updateList}>
                <input id="newIngr" type="text" name="ingredient"/>
            </form>
        </div>
    );
}

export default IngredientCard;