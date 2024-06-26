import styles from "./menulink.module.css"
import { NavLink } from 'react-router-dom';


function MenuLink({ children, to }) {


    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}

export default MenuLink