import "./Basket.scss";
import CardBasket from "../../components/cardBasket/cardBasket.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Basket() {
    const basket = useSelector((state) => state.basket.basket);
    console.log(basket);
    const sum = useSelector((state) => state.basket.priceProduct);

    return (
        <div className="wrapper">
            <header className="header-basket">
                <div className="header-basket__icon">
                    <Link to="/" className="header-basket__link">
                        <svg
                            data-name="Layer 2"
                            height="60"
                            id="Layer_2"
                            viewBox="0 0 100 100"
                            width="60"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title />
                            <path d="M50,11A39,39,0,1,0,89,50,39.05,39.05,0,0,0,50,11ZM62,53H45.24l3.88,3.88a3,3,0,0,1,0,4.24,3,3,0,0,1-4.24,0l-9-9a3.44,3.44,0,0,1-.38-.46l-.12-.22c-.05-.1-.11-.19-.15-.29s-.06-.2-.09-.3a2.58,2.58,0,0,1-.08-.26,2.93,2.93,0,0,1,0-1.18,2.58,2.58,0,0,1,.08-.26c0-.1,0-.2.09-.3s.1-.19.15-.29l.12-.22a3.44,3.44,0,0,1,.38-.46l9-9a3,3,0,0,1,4.24,4.24L45.24,47H62a3,3,0,0,1,0,6Z" />
                        </svg>
                    </Link>
                </div>
                <h1 className="header-basket__title">
                    Корзина с выбранными товарами
                </h1>
            </header>

            <main className="basket">
                {basket.map((item, index) => {
                    const { menuListId, id, url, title, price } = item;
                    return (
                        <Link
                            to={`/${menuListId}`}
                            key={index}
                            className="basket__link"
                        >
                            <CardBasket
                                id={id}
                                url={url}
                                title={title}
                                price={price}
                            />
                        </Link>
                    );
                })}
            </main>

            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__sum">
                        <p className="footer__text">Заказ на сумму:</p>
                        <span className="footer__price">{sum} ₽</span>
                    </div>
                    <button className="footer__btn">Оформить заказ</button>
                </div>
            </footer>
        </div>
    );
}

export default Basket;
