// src/components/RecipeList.js
import { useQuery } from 'react-query';

const fetchRecipes = async () => {
  const res = await fetch('https://your-api.com/recipes');
  return res.json();
};

const RecipeList = () => {
  const { data, isLoading, error, refetch } = useQuery('recipes', fetchRecipes);

  if (isLoading) return <p>Loading delicious recipes...</p>;
  if (error) return <p>Error loading recipes!</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh Recipes</button>
      {data.map(recipe => (
        <div key={recipe.id}>{recipe.title}</div>
      ))}
    </div>
  );
};