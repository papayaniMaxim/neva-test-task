import CheckIcon from '../../../../UI/CheckIcon';
import DeparturTimeSelectDesktop from '../DeparturTimeSelectDesktop/DeparturTimeSelectDesktop';
import classes from './EventOptionsDesktop.module.css'

function EventOptionsDesktop(props: {
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
                    
                    {option === 'Ближайший рейс сегодня'
                        ? <div className={classes.optionContainer}>
                            {option}
                            <br /><DeparturTimeSelectDesktop departurTime={departurTime} />
                        </div>
                        : option}
                </div>
            </li>)}
        </ul>
    );
}

export default EventOptionsDesktop;