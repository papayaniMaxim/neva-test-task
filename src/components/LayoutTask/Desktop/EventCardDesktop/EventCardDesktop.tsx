import { IEvent } from "../../../../interfaces/interfaces";
import ButtonDesktop from "../../../../UI/ButtonDesktop/ButtonDesktop";
import SvgClockDesktop from "../../../../UI/SvgClockDesktop/SvgClockDesktop";
import EventOptionsDesktop from "../EventOptionsDesktop/EventOptionsDesktop";
import PriceElementDesktop from "../PriceElementDesktop/PriceElementDesktop";
import classes from "./EventCardDesktop.module.css"

function EventCardDesktop(props: {
    event: IEvent
}) {
    const { event } = props
    return (
        <div className={classes.contaiter}>
            <div className={classes.imageContainer}>
                <img className={classes.image}
                    width={473}
                    height={370}
                    src={event.img}
                    alt="event image" />
                { event.id != 3 && <div className={
                    event.id === 1
                        ? classes.propositionMarker1
                        : classes.propositionMarker2}>
                    НОВИНКА
                </div>}

            </div>

            <div className={classes.content}>

                <h3 className={classes.title}>{event.title}</h3>

                <div className={classes.eventTimeContainer}>
                    <SvgClockDesktop />
                    <span className={classes.eventTime}>{event.eventTime}</span>
                </div>

                <EventOptionsDesktop departurTime={event.departurTime} options={event.options} />

                <div className={classes.bottom}>
                    <PriceElementDesktop onPearcePrice={event.onPearcePrice} equalPrice={event.equalPrice} />
                    <ButtonDesktop>Подробнее</ButtonDesktop>
                </div>

            </div>
        </div>);
}

export default EventCardDesktop;