/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Items from "../items/Items";
import Categories from "./Categories";

import Modal from "./Modal";

const Main = (props) => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [categor, setCategor] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [modalWindow, setModalWindow] = useState([]);
    const { addToBasket } = props;
    useEffect(() => {
        const getAlldata = async () => {
            try {
                const data = await fetch("https://fakestoreapi.com/products");
                if (!data.ok) {
                    throw new Error("Failed to fetch");
                }
                const response = await data.json();
                setIsError(false);
                const res = response.map((el) => {
                    return { ...el, count: 1 };
                });
                setData(res);
                setCategor(res);
            } catch (error) {
                setIsError(true);
                console.log(error.message);
            }
        };
        getAlldata();
    }, []);
    const getModal = (el) => {
        setModalWindow([el]);
        setIsModal(!isModal);
    };

    return (
        <>
            <Categories data={data} setCategor={setCategor} />
            <main>
                {categor && categor.map((el) => <Items addToBasket={addToBasket} key={el.id} el={el} getModal={getModal} />)}
                {isError && <p>Waths Wrong Page</p>}
                {isModal && modalWindow.map((el) => <Modal key={el.id} el={el} getModal={getModal} addToBasket={addToBasket} />)}
            </main>
        </>
    );
};

export default Main;
