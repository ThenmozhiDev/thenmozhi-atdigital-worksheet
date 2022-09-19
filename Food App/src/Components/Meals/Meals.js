import { Fragment } from "react"
import AvailableMeals from "./AvailableMeals"
import MealsItem from "./MealsItem/MealsItem"
import MealsSummary from "./MealsSummary"

const Meals = () => {
    return (
        <Fragment>
          <MealsSummary />
          <AvailableMeals />
         
        </Fragment>
    )
}

export default Meals;