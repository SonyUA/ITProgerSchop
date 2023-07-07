import Button from "../button/Button";

/* eslint-disable react/prop-types */
const Items = (props) => {
    const { el, addToBasket, getModal } = props;
    return (
        <div className='itemBox'>
            <p>{el.title}</p>
            <img onClick={() => getModal(el)} src={el.image} alt={`Photo number${el.id}`} />
            <p>
                <b>Price: </b>
                {el.price} $
            </p>
            <Button
                text={"Add"}
                onClick={() => {
                    addToBasket(el);
                }}
            />
        </div>
    );
};

export default Items;
