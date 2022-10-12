import "./CardProduct.scss";
import CardDescription from "../../components/cardDescription/cardDescription.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { menuList } from "../../menuList.js";

function CardProduct() {
    const { id } = useParams();
    const card = menuList.find((item) => item.id === id);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const count = useSelector((state) => state.basket.count);
    const sum = useSelector((state) => state.basket.priceProduct);

    return (
        <div className="wrapper-card">
            <div className="container">
                <header className="header">
                    <div className="header-basket__icon card-basket__icon">
                        <button
                            onClick={goBack}
                            className="header-basket__link card-basket__link"
                        >
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
                        </button>
                    </div>
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
                    <div className="card-description">
                        <CardDescription
                            key={card.id}
                            id={card.id}
                            url={card.url}
                            title={card.title}
                            descr={card.descr}
                            price={card.price}
                            weight={card.weight}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default CardProduct;
