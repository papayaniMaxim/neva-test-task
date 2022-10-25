import { ReactNode } from "react";
import classes from './Button.module.css'

function Button(props: {
    children:ReactNode,
}) {

    const { children } = props
    
    return (<button className={classes.button}>{children}</button> );
}

export default Button;