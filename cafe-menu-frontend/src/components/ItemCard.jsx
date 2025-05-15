import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/menuSlice";
import { FaTrash } from "react-icons/fa";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <div className="bg-blue-900 p-4 rounded-lg shadow-md relative">
      <h2 className="font-semibold text-lg mb-2 text-blue-200">{item.title}</h2>
      <p className="text-gray-300 mb-2">{item.description}</p>
      <p className="text-blue-400 font-medium">Price: ${item.price}</p>

      <button
        onClick={handleDelete}
        className="absolute bottom-2 right-2 text-white p-1.5 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition duration-300"
      >
        <FaTrash className="text-sm" />
      </button>
    </div>
  );
};

export default ItemCard;
