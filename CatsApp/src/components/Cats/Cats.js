import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
// import { gettingCats } from '../../store/actions/catsActions';
import { catsActions, gettingCats } from '../../store/slices/catsSlice';
import { useParams } from 'react-router';
import { gettingMoreCats } from '../../store/slices/catsSlice';

const Cats = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const { catsList } = useSelector(state => state.cats);
  useEffect(() => {
    dispatch(catsActions.resetState());
    setPage(1);
    dispatch(gettingCats({ id, page }));
  }, [id]);

  const seeMore = () => {
    setPage(page + 1);
    dispatch(gettingMoreCats({ id, page }));
  };

  return (
    <div className="cats-wrapper">
      <ul>
        {catsList?.map((cat) => {
          return (
            <li key={`${cat.id}-${page}`}>
              <div className="cat-img-container">
                <img src={cat.url} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="see_more_btn">
        <button
          className="btn"
          onClick={seeMore}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Cats;
