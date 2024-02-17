import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="food-img"
        src={`${CDN_URL}/${resData?.info?.cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
