import { IEvent } from "../../../interfaces/interfaces";
import Button from "../../../UI/Button/Button";
import SvgClock from "../../../UI/SvgClock/SvgClock";
import EventOptions from "../EventOptions/EventOptions";
import PriceElement from "../PriceElement/PriceElement";
import classes from "./EventCard.module.css"


function EventCard(props: {
    event: IEvent
}) {
    const { event } = props
    return (
        <div className={classes.contaiter}>
            <div className={classes.imageContainer}>
                <img className={classes.image}
                    width={340}
                    height={220}
                    src={event.img}
                    alt="event image" />
                <div className={
                    event.id === 1
                        ? classes.propositionMarker1
                        : classes.propositionMarker2}>
                    НОВИНКА
                </div>

            </div>

            <div className={classes.content}>

                <div className={classes.eventTimeContainer}>
                    <SvgClock />
                    <span className={classes.eventTime}>{event.eventTime}</span>
                </div>

                <h3 className={classes.title}>{event.title}</h3>

                <EventOptions departurTime={event.departurTime} options={event.options} />

                <div className={classes.bottom}>
                    <PriceElement onPearcePrice={event.onPearcePrice} equalPrice={event.equalPrice} />
                    <Button>Подробнее</Button>
                </div>

            </div>
        </div>);
}

export default EventCard;