import React from 'react';
import { useRecipes } from '../hooks/useRecipes';

const RecipeList = () => {
  // We extract exactly what we need from our custom hook
  const { data, isLoading, isError, error, refetch, isFetching } = useRecipes();

  // 1. Loading State (Tailwind Animated)
  if (isLoading) return (
    <div className="flex justify-center items-center h-40">
      <p className="animate-pulse text-orange-500 font-semibold">Loading delicious recipes...</p>
    </div>
  );

  // 2. Error State
  if (isError) return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-auto max-w-4xl">
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">{error.message}</span>
    </div>
  );

  // 3. Success State (The UI)
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Pastamazing Recipes</h2>
        
        {/* Manual Refetch Button */}
        <button 
          onClick={() => refetch()}
          disabled={isFetching}
          className={`px-4 py-2 rounded-lg text-white transition font-medium ${
            isFetching ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 shadow-sm'
          }`}
        >
          {isFetching ? 'Refreshing...' : 'Refresh Recipes'}
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {data?.slice(0, 10).map(recipe => (
          <div 
            key={recipe.id} 
            className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-gray-700 capitalize">{recipe.title}</h3>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">{recipe.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;