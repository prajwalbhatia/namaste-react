import { useEffect, useState } from "react";
import { RESTAURANTS_LIST_URL } from "../utils/constants";

const useRestaurantsList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(RESTAURANTS_LIST_URL);
      const restaurantsData = await res.json();
      setRestaurantList(
        restaurantsData?.data?.cards?.[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (error) {}
  };

  return restaurantList;
};

export default useRestaurantsList;
