/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "../button/Button";
const Basket = (props) => {
    const [addPrice, setAddPrice] = useState(0);
    const { inTheBasket, setInTheBasket } = props;
    const increment = (item) => {
        const newArr = inTheBasket.map((el) => {
            return el.id === item.id ? { ...el, count: (item.count += 1) } : el;
        });
        console.log("inc", newArr);
        setInTheBasket(newArr);
    };
    const decrement = (item) => {
        const newArr = inTheBasket.map((el) => {
            return el.id === item.id ? { ...el, count: (item.count -= 1) } : el;
        });
        setInTheBasket(newArr);
        console.log("dec", newArr);
    };
    const deleteFromBasket = (item) => {
        const newArr = inTheBasket.filter((el) => {
            return el.id !== item.id ? el : null;
        });
        console.log(newArr);
        setInTheBasket(newArr);
    };

    useEffect(() => {
        const allPrice = () => {
            let price = 0;
            inTheBasket.map((el) => {
                let all = el.count > 0 ? el.count * el.price : el.price;
                price += all;
            });
            return setAddPrice(price);
        };
        allPrice();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inTheBasket]); //

    const noCart = () => <div>Корзина пуста</div>;
    const addCart = () =>
        inTheBasket.map((el) => (
            <div key={el.id} className='basket-box'>
                <div className='basket-btn-box'>
                    <span>
                        <b>Price: </b>
                        {el.price} $
                    </span>
                    <Button
                        text={"+"}
                        onClick={() => {
                            increment(el);
                        }}
                    />
                    <span> Count:{el.count}</span>
                    <Button
                        text={"-"}
                        onClick={() => {
                            decrement(el);
                        }}
                    />
                    <Button
                        text={"Delete"}
                        onClick={() => {
                            deleteFromBasket(el);
                        }}
                    />
                </div>
                <div>
                    <img src={el.image} alt={`Photo number${el.id}`} />
                </div>
            </div>
        ));

    return (
        <>
            {inTheBasket.length > 0 ? addCart() : noCart()}
            {addPrice > 0 && <div>All price:{addPrice} $</div>}
        </>
    );
};

export default Basket;
