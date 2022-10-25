import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import classes from './Navigation.module.css'

function Navigation() {
    return (
        <nav className={classes.nav}>
            <Link to={'/'}><Button>Mobile Layout</Button></Link>
            <Link to={'/layout/desktop'}><Button>Desktop Layout</Button></Link>
            <Link to={'/responsive-table'}><Button>Responsive table</Button></Link>
            <Link to={'/js/task/1'}><Button>JS Таблица</Button></Link>
            <Link to={'/js/task/2'}><Button>JS Из А в Б</Button></Link>
        </nav>
    );
}

export default Navigation;