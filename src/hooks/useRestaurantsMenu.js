import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constants";

const useRestaurantsMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState({});

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    try {
      const resData = await fetch(`${RESTAURANT_URL}${resId}`);
      const resJson = await resData.json();
      setRestaurantData(resJson?.data?.cards?.[0]?.card?.card?.info);
    } catch (error) {}
  };

  return restaurantData;
};

export default useRestaurantsMenu;
