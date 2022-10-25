import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import classes from './Navigation.module.css'

function Navigation() {
    return (
        <nav className={classes.nav}>
            <Link to={'/neva_test_task'}><Button>Mobile Layout</Button></Link>
            <Link to={'/neva_test_task/layout/desktop'}><Button>Desktop Layout</Button></Link>
            <Link to={'/neva_test_task/responsive-table'}><Button>Responsive table</Button></Link>
            <Link to={'/neva_test_task/js/task/1'}><Button>JS Таблица</Button></Link>
            <Link to={'/neva_test_task/js/task/2'}><Button>JS Из А в Б</Button></Link>
        </nav>
    );
}

export default Navigation;