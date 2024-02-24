import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constants";

const useRestaurantsMenu = (resId) => {
  const [restaurantData, setRestaurantData] = useState({});
  const [restaurantCategory, setRestaurantCategory] = useState([]);

  console.log('🚀 ~ useRestaurantsMenu ~ restaurantData:', restaurantData)

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    try {
      const resData = await fetch(`${RESTAURANT_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`);
      const resJson = await resData.json();
      setRestaurantData(resJson?.data?.cards?.[2]?.card?.card?.info);
      const categoryData = resJson?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      let filterCategory = categoryData?.filter(category => category?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
      setRestaurantCategory(filterCategory || []);

    } catch (error) {}
  };

  return {restaurantData , restaurantCategory};
};

export default useRestaurantsMenu;
