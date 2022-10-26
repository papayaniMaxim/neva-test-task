import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import classes from './NavItem.module.css'

function NavItem(props: {
    children: ReactNode,
    path:string,
}) {
    const { children, path } = props
    const location = useLocation()
    const active = location.pathname === path    
    
    return (
        <li className={classes.navItem + ' ' + (active && classes.active)}>
            { children }
        </li>
    );
}

export default NavItem;