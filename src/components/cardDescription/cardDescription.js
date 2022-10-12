import "./cardDescription.scss";
import { useDispatch } from "react-redux";
import { readProduct } from "../../store/reducers/card.js";
import { addProduct } from "../../store/reducers/basket.js";

function CardDescription({ id, url, title, descr, price, weight }) {
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        let item = {
            menuListId: id,
            id: id,
            url: url,
            title: title,
            descr: descr,
            price: price,
            weight: weight,
        };

        dispatch(readProduct(item));
        dispatch(addProduct(item));
    };

    return (
        <div className="card-descr">
            <div className="card-descr__item">
                <img className="card-descr__preview" src={url} alt="Блюдо" />
                <div className="card-descr__inner">
                    <h2 className="card-descr__title">{title}</h2>
                    <p className="card-descr__descr">{descr}</p>

                    <div className="card-descr__info">
                        <div className="card-descr__price">
                            <span className="card-descr__value">{price} ₽</span>
                            <span className="card-descr__weight">
                                /{weight}
                            </span>
                        </div>
                        <button
                            onClick={handleAddProduct}
                            className="card-descr__btn"
                        >
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDescription;
