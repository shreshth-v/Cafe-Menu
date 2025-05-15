import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/menuSlice";
import { FaSpinner } from "react-icons/fa";
import ItemCard from "../components/ItemCard";

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.menu);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) {
    return (
      <div className="bg-gray-950 min-h-screen flex justify-center items-center">
        <FaSpinner className="animate-spin text-blue-400 text-4xl" />
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen p-6 text-white flex justify-center font-sans">
      <div className="w-full max-w-5xl mx-4">
        <h1 className="text-2xl font-bold mb-6 text-blue-400">Menu Items</h1>

        <input
          type="text"
          placeholder="Search items..."
          className="bg-gray-800 text-white border border-gray-700 p-2 mb-6 w-full rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
