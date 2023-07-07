import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Basket from "./components/Basket/Basket";
import "./App.css";

function App() {
    const [inTheBasket, setInTheBasket] = useState([]);
    const addToBasket = (el) => {
        let newBasket = [];
        let isItem = false;
        isItem = inTheBasket.some((item) => {
            return el.id === item.id;
        });

        if (!isItem) {
            setInTheBasket((prev) => [...prev, el]);
        }

        if (isItem) {
            newBasket = inTheBasket.map((item) => {
                if (el.id === item.id) {
                    return { ...el, count: (item.count += 1) };
                } else {
                    return item;
                }
            });
            setInTheBasket(newBasket);
        }
    };
    return (
        <div className='wrapper'>
            <Header inTheBasket={inTheBasket} setInTheBasket={setInTheBasket} />
            <Routes>
                <Route path='/' element={<Main addToBasket={addToBasket} />} />
                <Route path='basket' element={<Basket inTheBasket={inTheBasket} setInTheBasket={setInTheBasket} />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
