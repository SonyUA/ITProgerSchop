import { NavLink } from "react-router-dom";
import { FaCartShopping, FaHouseChimneyWindow } from "react-icons/fa6";

const Header = () => {
    return (
        <header>
            <div className='header-inner'>
                <span className='logo'> House Staff</span>
                <nav>
                    <ul className='nav'>
                        <li>
                            <NavLink to='/' className={"fa-shopp"}>
                                <FaHouseChimneyWindow /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/basket' className={"fa-shopp"}>
                                <FaCartShopping /> Basket
                            </NavLink>
                        </li>
                        <li>Кабинет</li>
                    </ul>
                </nav>
            </div>
            <div className='presentation'></div>
        </header>
    );
};

export default Header;
