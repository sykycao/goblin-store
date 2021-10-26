import React from 'react';
import { getProducts } from '../utils/api';
import { Category } from '../shared/types';

export const useProducts = (apiGetProducts = getProducts) => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<any>(false);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiGetProducts();
        setCategories(data.categories || []);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { categories, isLoading, error };
};
