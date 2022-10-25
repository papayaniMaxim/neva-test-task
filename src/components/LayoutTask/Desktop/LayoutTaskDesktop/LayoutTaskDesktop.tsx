import EventCardDesktop from "../EventCardDesktop/EventCardDesktop";
import classes from "./LayoutTaskDesktop.module.css"

function LayoutTaskDesktop() {
    const events = [
        {
            id: 1,
            title: 'Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
            options: [
                'Билет на целый день',
                'Неограниченное число катаний',
                '6 остановок у главных достопримечательностей',
                'Ближайший рейс сегодня',
            ],
            img: 'https://i.ibb.co/3Ccnqr1/Adobe-Stock-168443825-1.jpg',
            equalPrice: 900,
            onPearcePrice: 1200,
            departurTime: ['12:00', '12:00','12:00','12:00',],
            eventTime: '2 часа',
        },
        {
            id: 2,
            title: 'Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
            options: [
                'Билет на целый день',
                'Неограниченное число катаний,',
                '6 остановок у главных достопримечательностей',
                'Ближайший рейс сегодня',
            ],
            img: 'https://i.ibb.co/wQNFLgQ/ekskursii-po-spb-na-avtobuse-1.jpg',
            equalPrice: 2900,
            onPearcePrice: 1200,
            departurTime: ['12:00', '12:00','12:00','12:00','12:00','12:00',],
            eventTime: '2 часа',
        },
        {
            id: 3,
            title: 'Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
            options: [
                'Билет на целый день',
                'Неограниченное число катаний,',
                '6 остановок у главных достопримечательностей',
                'Ближайший рейс сегодня',
            ],
            img: 'https://i.ibb.co/9HK5fbw/music-1.jpg',
            equalPrice: 2900,
            onPearcePrice: 1200,
            departurTime: ['12:00', '12:00','12:00','12:00','12:00','12:00',],
            eventTime: '2 часа',
        }
    ]
    
    
    return (
        <div className={classes.container}>
            {events.map(event => <EventCardDesktop key={event.id} event={event}/>)}
        </div>);
}

export default LayoutTaskDesktop;