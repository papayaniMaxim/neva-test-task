import PriceIcon from '../../../UI/PriceIcon';
import classes from './PriceElement.module.css'

function PriceElement(props: {
    equalPrice: number,
    onPearcePrice:number,
    
}) {
    
    const { equalPrice, onPearcePrice} = props
    return (
        <div className={classes.prices}>
            <p className={classes.equalPrice}>
                {equalPrice}
                <PriceIcon/>
            </p>
            
            <p className={classes.onPearcePrice}>
                {onPearcePrice}
                р на причале
            </p>
        </div>
    );
}

export default PriceElement;