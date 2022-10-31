import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";
import { useEffect, useState } from "react";



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading ] = useState(false);
  const [httpError, setHttpError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch("https://react-http-ffed2-default-rtdb.firebaseio.com/meals.json");

      if(!response.ok) {
        throw new Error("something went wrong!");
      }
      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })

        setMeals(loadedMeals);
        setIsLoading(false);
      }
    };
  
      fetchMeals().catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  if(isLoading){
    return <section >
      <p className={classes.MealsLoading}>Loading...</p>
    </section>
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
