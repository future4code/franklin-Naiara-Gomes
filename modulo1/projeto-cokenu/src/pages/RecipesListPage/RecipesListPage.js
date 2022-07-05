import React from "react";
import RecipeCard from "../../components/RecipeCard.js/RecipeCard";
import { BASE_URL } from "../../constants/urls";
//import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeListContainer, AddRecipeButton } from "./styled";
import {Add} from '@material-ui/icons'
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
//import { goToAddRecipes } from "../../routes/coordinator";

const RecipesListPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const recipes = useRequestData([],`${BASE_URL}/recipe/feed`)
  

  const onClickCard = (id) =>{
    goToRecipeDetail(navigate, id)
  }



 const recipeCards = recipes.map((recipe)=>{
   //return (<p>{recipe.title}</p>)
  
   return (
    
    <RecipeCard 
        key={recipe.recipe_id}
        title={"recipe.title"}
        image={recipe.image}
        onClick={()=> onClickCard(recipe.recipe_id)}
      />
      
  )
 })


  return (
    <RecipeListContainer> 
       {recipeCards}
       <AddRecipeButton
       color={"primary"}
       onClick={()=>goToAddRecipes(navigate)}
        >
          <Add/>
       </AddRecipeButton> 
       </RecipeListContainer>
  );
};


export default RecipesListPage



