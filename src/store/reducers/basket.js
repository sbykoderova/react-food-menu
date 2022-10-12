import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: [],
        count: 0,
        priceProduct: 0,
    },
    reducers: {
        addProduct(state, action) {
            state.basket.push(action.payload);
            state.count = state.count + 1;
            state.priceProduct = state.basket.reduce((sum, current) => {
                return sum + parseInt(current.price);
            }, 0);
        },
        removeProduct(state, action) {
            state.basket = state.basket.filter(
                (item) => item.id !== action.payload.id
            );
            state.count = state.basket.reduce((sum) => {
                return (sum += 1);
            }, 0);
            state.priceProduct = state.basket.reduce((sum, current) => {
                return sum + parseInt(current.price);
            }, 0);
        },
    },
});

export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
