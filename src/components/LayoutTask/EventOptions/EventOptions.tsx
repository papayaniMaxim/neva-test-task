import CheckIcon from "../../../UI/CheckIcon";
import DeparturTimeSelect from "../DeparturTimeSelect/DeparturTimeSelect";
import classes from './EventOptions.module.css'

function EventOptions(props: {
    options: string[],
    departurTime: string[],

}) {

    const { options, departurTime } = props

    return (
        <ul>
            {options.map(option => <li
                className={classes.option}
                key={Math.random()}>
                <CheckIcon />
                <div className={classes.optionText}>
                    {option}
                    {option === 'Ближайший рейс сегодня'
                        ? <><br /><DeparturTimeSelect departurTime={departurTime} /></>
                        : null}
                </div>
            </li>)}
        </ul>
    );
}

export default EventOptions;