import React from "react";
import RecipeCard from "../../components/RecipeCard.js/RecipeCard";
import { BASE_URL } from "../../constants/urls";
//import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

const RecipesListPage = () => {
  useProtectedPage()
  const recipes = useRequestData([],`${BASE_URL}/recipe/feed`)
 

 const recipeCards = recipes.map((recipe)=>{

  return (
    <RecipeCard 
      
       title={"Batata"}
        image={"https://cdn-icons-png.flaticon.com/512/1868/1868619.png"}
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



