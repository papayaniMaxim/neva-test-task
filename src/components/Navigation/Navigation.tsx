import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import classes from './Navigation.module.css'

function Navigation() {
    return (
        <nav className={classes.nav}>
            <ul className={classes.navList}>
                <Link to={'/'}><NavItem path='/' >Layout 1</NavItem></Link>
                <Link to={'/layout/desktop'}><NavItem path='/layout/desktop'>Layout 2</NavItem></Link>
                <Link to={'/responsive-table'}><NavItem path='/responsive-table'>Table</NavItem></Link>
                <Link to={'/js/task/1'}><NavItem path='/js/task/1'>JS Task 1</NavItem></Link>
                <Link to={'/js/task/2'}> <NavItem path='/js/task/2'>JS Task 2</NavItem></Link>
            </ul>
        </nav>
    );
}

export default Navigation;