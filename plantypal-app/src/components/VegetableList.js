import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVegetables } from '../redux/actions/vegetableActions';

const VegetableList = () => {
  const dispatch = useDispatch();
  const vegetables = useSelector((state) => state.vegetables.vegetables);

  useEffect(() => {
    dispatch(fetchVegetables()); // Dispatch action to fetch vegetables when component mounts
  }, [dispatch]);

  return (
    <div>
      <h2>Available Vegetables</h2>
      <ul>
        {vegetables.map((vegetable) => (
          <li key={vegetable._id}>
            <h3>{vegetable.name}</h3>
            <p>Type: {vegetable.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VegetableList;
