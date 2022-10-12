import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basket.js";
import cardReducer from "./reducers/card.js";

export default configureStore({
    reducer: {
        basket: basketReducer,
        card: cardReducer,
    },
});
