import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Sidebar = () => {
  const { id: currentCategoryId } = useParams();
  const { categoriesList, categoriesStatus } = useSelector(state => state.categories);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (categoriesStatus === 'success') {
      setCategories(categoriesList);
    }
  }, [categoriesStatus, categoriesList]);

  return (
    <div className="sidebar-wrapper">
      <h6 className="sidebar-title">categories</h6>
      <ul>
        {categories?.map((category) => {
          const { id, name } = category;

          return (
            <li key={id}>
              <Link
                to={`/category/${id}`}
                className={`${+currentCategoryId === id ? 'current-category ' : ''}category-name`}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
