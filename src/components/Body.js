import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useRestaurantsList from "../hooks/useRestaurantsList";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const listRestaurantsClone = useRestaurantsList();
  const [listRestaurants, setListRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setListRestaurants([...listRestaurantsClone]);
  }, [listRestaurantsClone]);

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

  if (!onlineStatus) {
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );
  }

  return listRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-solid border-black mr-4"
            value={searchText}
          />
          <button className="bg-green-200 px-4 py-1 cursor-pointer rounded-md" onClick={handleSearch}>
            Search
          </button>
          <button className="bg-gray-100 ml-4 px-4 py-1 cursor-pointer rounded-md" onClick={handleReset}>
            Reset
          </button>

          <button className="bg-gray-200 px-4 py-1 cursor-pointer m-4 rounded-md" onClick={filterRestaurants}>
          Top rated restaurants
        </button>
        </div>


      </div>
      <div className="flex flex-wrap">
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
