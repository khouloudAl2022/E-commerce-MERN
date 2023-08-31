import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "wishlist",
  initialState: { products: [], quantity: 0 },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
    },
    deleteCart: (state, action) => {
      const productId = action.payload;
      // find product to delete
      const productToDelete = state.products.find(product=>product.id === productId) // return boolean
      if(productToDelete){ // if true
          state.quantity -= productToDelete.quantity; // increment -1
          state.total -= productToDelete.price * productToDelete.quantity; // price * quantite
          state.products = state.products.filter(product=>product.id !== productId);  
  }}}
});
export const { addProduct, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
