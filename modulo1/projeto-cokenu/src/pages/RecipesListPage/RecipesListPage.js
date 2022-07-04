import React from "react";
import RecipeCard from "../../components/RecipeCard.js/RecipeCard";
import { BASE_URL } from "../../constants/urls";
//import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

const RecipesListPage = () => {
  useProtectedPage()
  const recipes = useRequestData([],`${BASE_URL}/recipe/feed`)
  console.log(recipes)

 const recipeCards = recipes.map((recipe)=>{
  
  return (
    
    <RecipeCard 
        title={"title"}
        image={recipe.image}
        onClick={()=> null}
      />
      
  )
 })


  return (
    <div>
     
     
       {recipeCards}
    </div>
  );
};


export default RecipesListPage



