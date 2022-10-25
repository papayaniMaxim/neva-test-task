import { useState } from 'react';
import classes from './JSTaskAB.module.css'

function JSTaskAB() {
    const [route, setRoute] = useState<string>("из A в B")
    const [time, setTime] = useState<number>(0)
    const [backTime, setBackTime] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(1)
    const [open, setOpen] = useState(false)
    
    const fromAtoB = [
        '2021-08-21 18:00:00',
        '2021-08-21 18:30:00',
        '2021-08-21 18:45:00',
        '2021-08-21 19:00:00',
        '2021-08-21 19:15:00',
        '2021-08-21 21:00:00',
    ]

    const fromBtoA = [
        '2021-08-21 18:30:00',
        '2021-08-21 18:45:00',
        '2021-08-21 19:00:00',
        '2021-08-21 19:15:00',
        '2021-08-21 19:35:00',
        '2021-08-21 21:50:00',
        '2021-08-21 21:55:00',
    ]

    const dateNow = new Date(Date.now())

    const timeZoneOffset = dateNow.getTimezoneOffset().valueOf() * 60 * 1000

    const dateFromAtoB = fromAtoB.map(date => Date.parse(date) - 3 * 60 * 60 * 1000 - timeZoneOffset)
    const dateFromBtoA = fromBtoA.map(date => Date.parse(date) - 3 * 60 * 60 * 1000 - timeZoneOffset)

    const returnToA = route === 'из A в B и обратно в А'

    const validDateStart = route === "из B в A" ? dateFromBtoA : dateFromAtoB

    const validDateBack = dateFromBtoA.filter(date => date > time + 50 * 60 * 1000 && date > dateFromAtoB[0] + 50 * 60 * 1000)

    const ticketPrice = route === 'из A в B и обратно в А' ? 1200 : 700

    const startTimeString = new Date(time).toLocaleTimeString()
    
    const travelTime = returnToA ? new Date(backTime + 50 * 60 * 1000 - time).getTime() / 1000 / 60 : 50
    
    const returnTimeString = returnToA
        ? new Date(backTime + 50 * 60 * 1000).toLocaleTimeString()
        : new Date(time + 50 * 60 * 1000).toLocaleTimeString()

    return (
        <form className={classes.form}>
            <div>
                <label
                    className={classes.label}
                    htmlFor="route">
                    Выберите маршрут
                </label>

                <select
                    className={classes.select}
                    value={route}
                    onChange={(e) => setRoute(() => e.target.value)}
                    name="route" id="route">
                    <option value="из A в B">из A в B</option>
                    <option value="из B в A">из B в A</option>
                    <option value="из A в B и обратно в А">из A в B и обратно в А</option>
                </select>
            </div>

            <div>
                <label
                    className={classes.label}
                    htmlFor="time">
                    Выберите время отправки
                </label>

                <select
                    className={classes.select}
                    value={time}
                    onChange={(e) => setTime(() => + e.target.value)}
                    name="time" id="time">
                    <option>Время отправки</option>
                    {validDateStart.map(time => (
                        <option key={time} value={time}>
                            {new Date(time).toLocaleString()}
                        </option>))}
                </select>

            </div>

            {returnToA && <div>
                <label
                    className={classes.label}
                    htmlFor="timeBack">
                    Выберите время обратного следования
                </label>
                <select
                    className={classes.select}
                    value={backTime}
                    onChange={(e) => setBackTime(() => + e.target.value)}
                    name="timeBack" id="timeBack">
                    <option>Время обратного следования</option>
                    {validDateBack.map(time => (
                        <option key={time} value={time}>
                            {new Date(time).toLocaleString()}
                        </option>
                    ))}
                </select>
            </div>}

            <div>
                <label className={classes.label} htmlFor="num">Количество билетов</label>
                <input
                    className={classes.input}
                    value={quantity}
                    onChange={(e) => setQuantity(() => + e.target.value)}
                    id="num" />
            </div>

            <div className={classes.bottom}>
                <button
                    className={classes.button}
                    onClick={(e) => {
                        e.preventDefault()
                        setOpen(() => true)
                    }}>Посчитать</button>
            </div>

            {open && <div
                className={classes.modal}
                onClick={() => setOpen(() => false)}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={classes.message}>

                    Вы выбрали {quantity} билета
                    по маршруту {route} стоимостью {ticketPrice * quantity}р. <br />
                    Это путешествие займет у вас {travelTime} минут.<br />
                    Теплоход отправляется в {startTimeString},
                    а прибудет в {returnTimeString}.

                    <div className={classes.bottom}>
                        <button
                            className={classes.button}
                            onClick={(e) => {
                                e.stopPropagation()
                                setOpen(() => false)
                            }}>OK</button>
                    </div>
                </div>
            </div>}
        </form>);
}

export default JSTaskAB;