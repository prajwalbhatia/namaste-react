import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../slices/cartSlice";
import { LIST_ITEM_URL } from "../utils/constants";

const CategoryItemList = ({ items, inCart = false }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

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

        <div className="w-[150px] h-[150px] relative">
          <img src={`${LIST_ITEM_URL}${item?.card?.info?.imageId}`} />
          <div className="absolute left-8 top-2 h-[25px] w-[55px] bg-white text-center rounded-md">
            {inCart ? (
              <button onClick={() => handleRemoveItem(item)}>Remove</button>
            ) : (
              <button onClick={() => handleAddItem(item)}>Add</button>
            )}
          </div>
        </div>
      </div>
    );
  });
};

export default CategoryItemList;
