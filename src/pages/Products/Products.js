import "./Products.scss";
import Card from "../../components/cardProducts/card.js";
import { menuList } from "../../menuList.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Products() {
    const count = useSelector((state) => state.basket.count);
    const sum = useSelector((state) => state.basket.priceProduct);

    return (
        <div className="wrapper">
            <div className="container">
                <header className="header">
                    <h1 className="header__title">наша продукция</h1>
                    <div className="header__cart">
                        <div className="header__price">
                            <p>{count} товара</p>
                            <p>на&nbsp;сумму {sum} ₽</p>
                        </div>
                        <div className="header__icon">
                            <Link to="/basket" className="header__icon-link">
                                <img
                                    className="header__icon-img"
                                    src="images/cart.svg"
                                    alt="Корзина"
                                />
                            </Link>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="menu">
                        {menuList.map((item, index) => {
                            const { id, url, title, descr, price, weight } =
                                item;
                            return (
                                <Link
                                    to={`/${id}`}
                                    key={index}
                                    className="menu__link"
                                >
                                    <Card
                                        id={id}
                                        url={url}
                                        title={title}
                                        descr={descr}
                                        price={price}
                                        weight={weight}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Products;
