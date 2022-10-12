import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: {
        card: {},
    },
    reducers: {
        readProduct(state, action) {
            state.card = action.payload;
        },
    },
});

export const { readProduct } = cardSlice.actions;

export default cardSlice.reducer;
