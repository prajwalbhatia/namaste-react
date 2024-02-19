import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 flex flex-col rounded-md">
      <img
        className="h-40 rounded-md"
        alt="food-img"
        src={`${CDN_URL}/${resData?.info?.cloudinaryImageId}`}
      />

      <div className="m-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <h4 className="">{cuisines?.join(", ")}</h4>
        <h4>{avgRating} stats</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
