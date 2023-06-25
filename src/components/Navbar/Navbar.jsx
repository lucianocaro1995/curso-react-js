import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <ul className="categorias">
            <li className="categorias-li">
                <NavLink className={"categoria-link"} to={'/categoria/laptop'}>
                    <img src="https://i.ibb.co/BqV9VZg/laptop.png" alt="Categoria laptops" />
                    <span className="categoria-span">Laptops</span>
                </NavLink>
            </li>
            <li className="categorias-li">
                <NavLink className={"categoria-link"} to={'/categoria/tablet'}>
                    <img src="https://i.ibb.co/zhq5Rnc/tablet.png" alt="Categoria tablets" />
                    <span className="categoria-span">Tablets</span>
                </NavLink>
            </li>
            <li className="categorias-li">
                <NavLink className={"categoria-link"} to={'/categoria/tv'}>
                    <img src="https://i.ibb.co/zN9KwGm/tv.png" alt="Categoria tv" />
                    <span className="categoria-span">Tv</span>
                </NavLink>
            </li>
            <li className="categorias-li">
                <NavLink className={"categoria-link"} to={'/categoria/monitor'}>
                    <img src="https://i.ibb.co/xXRSRPW/monitor.png" alt="Categoria monitores" />
                    <span className="categoria-span">Monitores</span>
                </NavLink>
            </li>
            <li className="categorias-li">
                <NavLink className={"categoria-link"} to={'/categoria/pc'}>
                    <img src="https://i.ibb.co/ZWRDqk8/pc.png" alt="Categoria pc" />
                    <span className="categoria-span">Pc</span>
                </NavLink>
            </li>
            <li className="categorias-li">
                <NavLink className={"categoria-link"} to={'/categoria/celular'}>
                    <img src="https://i.ibb.co/VjR2Wj9/smartphone.png" alt="Categoria celulares" />
                    <span className="categoria-span">Celulares</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar