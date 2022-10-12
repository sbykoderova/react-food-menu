import "./card.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/basket.js";
import { v4 as uuidv4 } from "uuid";

function Card({ id, url, title, descr, price, weight }) {
    const dispatch = useDispatch();

    const handleAddProduct = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let item = {
            menuListId: id,
            id: uuidv4(),
            url: url,
            title: title,
            price: price,
        };

        dispatch(addProduct(item));
    };

    return (
        <div className="card">
            <img className="card__preview" src={url} alt="Блюдо" />
            <h2 className="card__title">{title}</h2>
            <p className="card__descr">{descr}</p>
            <div className="card__info">
                <div className="card__info-wrap">
                    <div className="card__price">{price} ₽</div>
                    <div className="card__weight">/{weight}</div>
                </div>
                <button onClick={handleAddProduct} className="card__btn">
                    +
                </button>
            </div>
        </div>
    );
}

export default Card;
