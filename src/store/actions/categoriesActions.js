import { API_LINK } from '../../helpers/constants';
import { categoriesActions } from '../reducers/categoriesSlice';

export const gettingCategories = () => async (dispatch) => {
  dispatch(categoriesActions.setStatus('pending'));
  const getCategories = async () => {
    const response = await fetch(`${API_LINK}/categories`);
    const categories = await response.json();
    
    return categories;
  };

  try {
    const categoriesList = await getCategories();
    dispatch(categoriesActions.gettingCategories(categoriesList));
    dispatch(categoriesActions.setStatus('success'));
  } catch (error) {
    dispatch(categoriesActions.setStatus('error'));
  }
};
