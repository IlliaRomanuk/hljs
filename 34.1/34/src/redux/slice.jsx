
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTableData = createAsyncThunk(
  "table/fetchTableData",
  async (url, thunkAPI) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data; 
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "table/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const res = await fetch("https://698b71d86c6f9ebe57bcb9af.mockapi.io/gfd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!res.ok) throw new Error("Ошибка при добавлении продукта");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const remadeProduct = createAsyncThunk(
  "table/remadeProduct",
  async (productData, { rejectWithValue }) => {
    try {
      console.log(productData);

      const res = await fetch(`https://698b71d86c6f9ebe57bcb9af.mockapi.io/gfd/${productData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!res.ok) throw new Error("Ошибка при добавлении продукта");
       return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "table/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await fetch(
        `https://698b71d86c6f9ebe57bcb9af.mockapi.io/gfd/${id}`,
        { method: "DELETE" }
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const tableSlice = createSlice({
  name: "table",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clean: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTableData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTableData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Ошибка загрузки данных";
      })


      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload); // добавляем новый продукт
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(remadeProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(remadeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
      
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(remadeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(
          item => item.id !== action.payload
        );
      });
      
  },
});

export const { clean } = tableSlice.actions;
export default tableSlice.reducer;
