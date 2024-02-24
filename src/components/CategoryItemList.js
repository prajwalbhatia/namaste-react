import { LIST_ITEM_URL } from "../utils/constants";

const CategoryItemList = ({ items }) => {
  return items?.map((item, index) => {
    return (
      <div
        key={index}
        className="flex justify-between my-5  pb-10 border-b-2 border-b-gray-300"
      >
        <div className="">
          <h1 className="font-semibold">{item?.card?.info?.name}</h1>
          <div className="font-medium">Rs:{item?.card?.info?.price / 100}</div>
          <div className="mt-2 text-gray-400">
            {item?.card?.info?.description}
          </div>
        </div>

        <div className="w-[150px] h-[150px]">
          <img src={`${LIST_ITEM_URL}${item?.card?.info?.imageId}`} />
        </div>
      </div>
    );
  });
};

export default CategoryItemList;
