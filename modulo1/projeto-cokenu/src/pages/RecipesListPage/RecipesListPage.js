import React from "react";
//import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useProtectedPage from "../../hooks/useProtectedPage";

const RecipesListPage = () => {
  useProtectedPage()
  return (
    <div>
      <h1>RecipeDetailPage</h1>
      
    </div>
  );
};


export default RecipesListPage
