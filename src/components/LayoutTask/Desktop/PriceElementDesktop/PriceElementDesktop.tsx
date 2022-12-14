import PriceIcon from '../../../../UI/PriceIcon';
import PriceIconDesktop from '../../../../UI/PriceIconDesktop';
import classes from './PriceElementDesktop.module.css'

function PriceElementDesktop(props: {
    equalPrice: number,
    onPearcePrice: number,

}) {

    const { equalPrice, onPearcePrice } = props
    return (
        <div className={classes.prices}>
            <p className={classes.equalPrice}>
                {equalPrice}
                <PriceIconDesktop />
            </p>

            <p className={classes.onPearcePrice}>
                {onPearcePrice}
                <svg className={classes.svgIcon} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3.07743 10.0907V9.74073H2.72743H0.895502V8.80439H2.72743H3.07743V8.45439V7.44866V7.09866H2.72743H0.895502V5.98359H2.72729H3.07729V5.63359V0.35H7.5937C8.65279 0.35 9.48896 0.670548 10.1335 1.29173C10.7767 1.91242 11.1045 2.7129 11.1045 3.72434C11.1045 4.73667 10.7766 5.53706 10.1335 6.15698L10.1334 6.15706C9.48885 6.77876 8.65296 7.09869 7.5937 7.09869H4.69597H4.34597V7.44869V8.45441V8.80441H4.69597H8.92286V9.74073H4.69612H4.34612V10.0907V11.65H3.07743V10.0907ZM2.80416 11.9231C2.85528 11.9744 2.92063 12 3.00023 12H4.42345C4.49732 12 4.56123 11.9744 4.61522 11.9231C4.6692 11.8721 4.69612 11.8069 4.69612 11.7273V10.4407V10.0907L2.80416 11.9231ZM0.818304 8.45439C0.738701 8.45439 0.67347 8.48003 0.622236 8.53131V5.71448C0.571142 5.76847 0.545502 5.83238 0.545502 5.90622V7.17598C0.545502 7.2556 0.570978 7.32084 0.622236 7.37207C0.673493 7.42335 0.73856 7.44866 0.818304 7.44866H2.37743H2.72743V7.79866V8.10439V8.45439H2.37743H0.818304ZM4.69597 1.46552H4.34597V1.81552V5.63375V5.98375H4.69597H7.42325C8.09801 5.98375 8.676 5.78408 9.12205 5.35849C9.56892 4.93266 9.78456 4.37637 9.78456 3.72448C9.78456 3.07278 9.56886 2.51677 9.12221 2.09063L9.12213 2.09056C8.67609 1.66525 8.09812 1.46552 7.42325 1.46552H4.69597Z" fill="black" stroke="white" strokeWidth="0.7" />
                </svg>
                ???? ??????????????
            </p>
        </div>
    );
}

export default PriceElementDesktop;