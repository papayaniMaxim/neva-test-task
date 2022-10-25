import { useMemo, useState } from 'react';
import classes from './DeparturTimeSelectDesktop.module.css'

function DeparturTimeSelectDesktop(props: { departurTime: string[] }) {

    const [openList, setOpenList] = useState(false)
    const { departurTime } = props

    const departurTimeList = useMemo(() => {
        if (departurTime.length > 4) {
            return (
                <>
                    <li className={classes.timeItem} key={1}>{departurTime[0]}</li>
                    <li className={classes.timeItem} key={2}>{departurTime[1]}</li>
                    <li className={classes.timeItem} key={3}>{departurTime[2]}</li>
                    <li className={classes.timeItem + " " + classes.moreItem} key={'more'}
                        onClick={() => setOpenList(prev => !prev)}
                    >еще...</li>
                </>
            )
        }
        return departurTime.map((time, index) => {
            return <li className={classes.timeItem} key={index}>{time}</li>
        })

    }, [departurTime])

    return (
        <ul className={classes.timeItemList}>
            {!openList
                ? departurTimeList
                
                : departurTime.map((time, index) => {
                    return <li className={classes.timeItem} key={index}>{time}</li>
                })}
        </ul>
    );
}

export default DeparturTimeSelectDesktop;