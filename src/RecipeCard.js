
const RecipeCard = ({recipes}) => {

 return(
   <>
     <div className="col-2"></div>
     <div className="col-8">
       <div className="row"> 
       {recipes && recipes.map(recipe => {
           return (
            <div class="card col-4" style={{width: '18rem'}}>
            <img src={recipe.image} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">{recipe.title}</p>
            </div>
          </div>
           )
       })}
       </div>
     </div>
     <div className="col-2"></div>
   </>
 );
}

export default RecipeCard;