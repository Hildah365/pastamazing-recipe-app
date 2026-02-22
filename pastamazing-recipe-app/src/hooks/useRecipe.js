import { useQuery } from 'react-query';

// The fetcher function can stay here or move to a services file
const fetchRecipes = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch recipes');
  return res.json();
};

export const useRecipes = () => {
  // We return the entire query object so the component can access 
  // data, isLoading, isError, and refetch.
  return useQuery('recipes', fetchRecipes, {
    staleTime: 60000, // 1 minute
    cacheTime: 300000, // 5 minutes
    retry: 2, // Automatically retry twice if the API fails
    onSuccess: () => console.log('Recipes updated in cache!'),
  });
};