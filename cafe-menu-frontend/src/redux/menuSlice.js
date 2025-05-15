import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

// Fetch all items
export const fetchItems = createAsyncThunk("menu/fetchItems", async () => {
  try {
    const response = await apiClient.get("menu/items");
    return response.data;
  } catch (error) {
    toast.error("Error fetching items.");
    throw error;
  }
});

// Add new item
export const addItem = createAsyncThunk(
  "menu/addItem",
  async (item, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("menu/item", item);
      toast.success("Item added successfully!");
      return response.data;
    } catch (error) {
      toast.error("Error adding item.");
      return rejectWithValue(error.response?.data);
    }
  }
);

// Delete item
export const deleteItem = createAsyncThunk(
  "menu/deleteItem",
  async (id, { rejectWithValue }) => {
    try {
      const response = await apiClient.delete(`menu/item/${id}`);
      toast.success("Item deleted successfully!");
      return id;
    } catch (error) {
      toast.error("Error deleting item.");
      return rejectWithValue(error.response?.data);
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        // state.items.push(action.payload);
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default menuSlice.reducer;
