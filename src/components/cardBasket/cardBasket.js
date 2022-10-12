import "./cardBasket.scss";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/reducers/basket.js";

function CardBasket({ id, url, title, price }) {
    const dispatch = useDispatch();

    const handleRemoveProduct = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let item = {
            id: id,
        };

        dispatch(removeProduct(item));
    };

    return (
        <div className="basket__list">
            <div className="basket__item">
                <img className="basket__preview" src={url} alt="Блюдо" />
                <h2 className="basket__title">{title}</h2>
            </div>
            <div className="basket__price">
                <span className="basket__price-value">{price} ₽</span>
                <button onClick={handleRemoveProduct} className="basket__btn">
                    ×
                </button>
            </div>
        </div>
    );
}

export default CardBasket;
