import EventCard from "./EventCard/EventCard";
import classes from "./LayoutTask.module.css"

function LayoutTask() {
    const events = [
        {
            id: 1,
            title: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
            options: [
                'Билет на целый день',
                'Неограниченное число катаний',
                '6 остановок у главных достопримечательностей',
                'Ближайший рейс сегодня',
            ],
            img: 'https://i.ibb.co/nR7zdVh/sankt-peterburg-piter-st-3495.png',
            equalPrice: 900,
            onPearcePrice: 1200,
            departurTime: ['12:00', '12:00','12:00','12:00',],
            eventTime: '2 часа',
        },
        {
            id: 2,
            title: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
            options: [
                'Билет на целый день',
                'Неограниченное число катаний,',
                '6 остановок у главных достопримечательностей',
                'Ближайший рейс сегодня',
            ],
            img: 'https://i.ibb.co/nR7zdVh/sankt-peterburg-piter-st-3495.png',
            equalPrice: 2900,
            onPearcePrice: 1200,
            departurTime: ['12:00', '12:00','12:00','12:00','12:00','12:00',],
            eventTime: '2 часа',
        }
    ]
    
    
    return (
        <div className={classes.container}>
            {events.map(event => <EventCard key={event.id} event={event}/>)}
        </div>);
}

export default LayoutTask;