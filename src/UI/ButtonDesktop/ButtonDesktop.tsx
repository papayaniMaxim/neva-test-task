import { ReactNode } from "react";
import classes from './ButtonDesktop.module.css'

function ButtonDesktop(props: {
    children:ReactNode,
}) {

    const { children } = props
    
    return (<button className={classes.button}>{children}</button> );
}

export default ButtonDesktop;