import { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import env from 'react-dotenv';
import RecipeCard from "./RecipeCard";

const IngredientCard = () => {

    const [ingredientList, setIngredientList] = useState([]);
    const [recipeList, setRecipeList] = useState([]);

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
        var ingrQuery = "";
        ingredientList.map(ingr => ingrQuery += "," + ingr);
        fetch(env.SPOON_URL + ingrQuery + '&number=6&apiKey=' + env.API_KEY,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            }
        )
            .then(
                res => res.json()
            )
            .then(
                (data) => {
                    setRecipeList(data);
                }
            )
    }, [ingredientList]);

    const removeIngr = () => {
        setIngredientList([]);
    }

    return(
        <>
        <div className="row">
            <div className="col-4">
            <img height="200" width="400" src="/my-recipes.svg" alt="NoPhoto"/>
            <form className="form-floating" onSubmit={updateList}> 
                <div class="form-floating mb-3">
                  <input type="text" id="newIngr" name="ingredient" className="form-control" placeholder="Eggs,Chicken,Broccoli"/>
                  <label for="newIngr">Eggs,Chicken,Broccoli</label>
                </div>
            </form>
            </div>
        <div className="col-6 text-center">
                    <ol class="list-group list-group-numbered">
                        {ingredientList && ingredientList.map(ingr =>
                            <Ingredient ingredientName={ingr} />
                        )}
                    </ol>
            <div hidden={true} id="listAlert"></div>
            
        </div>
        <div className="col-2 text-center">
                <button className="btn btn-primary" onClick={removeIngr}>Remove Ingredients</button>
            </div>
        </div>
        <div className="row">
            {console.log(recipeList)}
        <RecipeCard recipes={recipeList}/>
        </div>
        </>
    );
}

export default IngredientCard;