/* eslint-disable react/no-unescaped-entities */

import Button from "../button/Button";

/* eslint-disable react/prop-types */
const Categories = (props) => {
    const { data, setCategor } = props;

    const category = (name) => {
        if (name === "all") {
            const newArr = data;
            return setCategor(newArr);
        }
        const newArr = data.filter((el) => el.category === name);
        setCategor(newArr);
    };

    return (
        <div className='inner-nav'>
            <Button text={"All"} onClick={() => category("all")} />
            <Button text={"Men's clothing"} onClick={() => category("men's clothing")} />
            <Button text={"Jewelery"} onClick={() => category("jewelery")} />
            <Button text={"Electronics"} onClick={() => category("electronics")} />
            <Button text={"Women's clothing"} onClick={() => category("women's clothing")} />
        </div>
    );
};

export default Categories;
