/* eslint-disable react/prop-types */
const Button = (props) => {
    const { text, onClick } = props;
    return (
        <button onClick={onClick} className='btn'>
            {text}
        </button>
    );
};

export default Button;
