import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRestaurants, setListRestaurants] = useState([]);
  const [listRestaurantsClone, setListRestaurantsClone] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantsData = await res.json();

    setListRestaurants(
      restaurantsData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListRestaurantsClone(
      restaurantsData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const filterRestaurants = () => {
    let restaurantsData = [...listRestaurantsClone];
    const filter = restaurantsData.filter(
      (restaurant) => Number(restaurant?.info?.avgRating) > 4
    );

    setListRestaurants([...filter]);
  };

  const handleSearch = () => {
    let restaurantsData = [...listRestaurantsClone];
    const filter = restaurantsData.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );

    setListRestaurants([...filter]);
  };

  const handleReset = () => {
    setListRestaurants([...listRestaurantsClone]);
    setSearchText("");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
            value={searchText}
          />
          <button className="c-pointer" onClick={handleSearch}>
            Search
          </button>
          <button className="c-pointer ml-8" onClick={handleReset}>
            Reset
          </button>
        </div>

        <button className="c-pointer filter-btn" onClick={filterRestaurants}>
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listRestaurants?.map((resData) => (
          <Link key={resData?.info?.id} to={`/restaurant/${resData?.info?.id}`}>
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
