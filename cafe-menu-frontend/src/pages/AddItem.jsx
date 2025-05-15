import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/menuSlice";

const AddItem = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { title, description, price } = formData;
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required.";
    }

    if (!price) {
      newErrors.price = "Price is required.";
    } else if (isNaN(price) || parseFloat(price) <= 0) {
      newErrors.price = "Price must be a number greater than 0.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { title, description, price } = formData;
      const priceNum = parseFloat(price);
      dispatch(addItem({ title, description, price: priceNum }));

      // Reset form and errors
      setFormData({ title: "", description: "", price: "" });
      setErrors({});
    }
  };

  return (
    <div className="bg-gray-950 min-h-screen p-6 text-white flex justify-center font-sans">
      <div className="w-full max-w-5xl mx-4">
        <h1 className="text-2xl font-bold mb-6 text-blue-400">Add New Item</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Input */}
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className={`bg-gray-800 text-white border p-2 w-full rounded ${
                errors.title ? "border-red-500" : "border-gray-700"
              }`}
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Description Input */}
          <div>
            <textarea
              name="description"
              placeholder="Description"
              className={`bg-gray-800 text-white border p-2 w-full rounded ${
                errors.description ? "border-red-500" : "border-gray-700"
              }`}
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Price Input */}
          <div>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className={`bg-gray-800 text-white border p-2 w-full rounded ${
                errors.price ? "border-red-500" : "border-gray-700"
              }`}
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded shadow-lg"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
