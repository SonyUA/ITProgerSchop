import Button from "../button/Button";
/* eslint-disable react/prop-types */
const Modal = (props) => {
    const { el, getModal, addToBasket } = props;
    return (
        <div className='modal-wrapper'>
            <div>
                <b className='modal-closed' onClick={() => getModal(el)}>
                    X
                </b>
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
        </div>
    );
};

export default Modal;
