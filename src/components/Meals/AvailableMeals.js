import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [reqError, setReqError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://react-http-requests-4811b-default-rtdb.firebaseio.com/Meals.json");
      if (!response.ok) {
        throw new Error("Something Went Wrong!!!");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals)
    setIsLoading(false);
    }

    fetchMeals().catch(error => {
      setIsLoading(false);
      setReqError(error.message);
    });

  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isloading) {
    return <section className={classes.mealsLoading}>
     <p>Loading...</p>
   </section>
  }
  if (reqError) {
    return (
      <section className={classes.mealsError}>
        <p>{reqError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>{isloading ? <p>Loading...</p> : <ul>{mealsList}</ul>}</Card>
    </section>
  );
};

export default AvailableMeals;
