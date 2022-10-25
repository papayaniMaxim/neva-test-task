import { useMemo } from 'react'
import classes from './JSTaskTable.module.css'

function JSTaskTable() {


    const data = [
        {
            id: 1,
            event_id: "003",
            event_date: '2021-08-21 13:00:00',

            tiket_types: [
                {
                    type: 'default',
                    ticket_adult_price: 800,
                    ticket_adult_quantity: 1,
                    ticket_kid_price: 550,
                    ticket_kid_quantity: 3,
                },
                {
                    type: 'group',
                    ticket_adult_price: 600,
                    ticket_adult_quantity: 1,
                    ticket_kid_price: 350,
                    ticket_kid_quantity: 1,
                },
                {
                    type: 'discound',
                    ticket_adult_price: 500,
                    ticket_adult_quantity: 1,
                    ticket_kid_price: 250,
                    ticket_kid_quantity: 0,
                }
            ],
            user_id: "00451",
            created: "2021-01-11 13:22:09",
        },
        {
            id: 2,
            event_id: "005",
            event_date: '2021-08-21 13:00:00',
            tiket_types: [
                {
                    type: 'default',
                    ticket_adult_price: 800,
                    ticket_adult_quantity: 1,
                    ticket_kid_price: 550,
                    ticket_kid_quantity: 2,
                },
                {
                    type: 'group',
                    ticket_adult_price: 600,
                    ticket_adult_quantity: 2,
                    ticket_kid_price: 350,
                    ticket_kid_quantity: 1,
                },
                {
                    type: 'discound',
                    ticket_adult_price: 500,
                    ticket_adult_quantity: 0,
                    ticket_kid_price: 250,
                    ticket_kid_quantity: 1,
                }
            ],
            user_id: "00454",
            created: "2021-01-11 13:22:09",
        },
        {
            id: 3,
            event_id: "004",
            event_date: '2021-08-21 13:00:00',
            tiket_types: [
                {
                    type: 'default',
                    ticket_adult_price: 800,
                    ticket_adult_quantity: 2,
                    ticket_kid_price: 550,
                    ticket_kid_quantity: 2,
                },
                {
                    type: 'group',
                    ticket_adult_price: 600,
                    ticket_adult_quantity: 1,
                    ticket_kid_price: 350,
                    ticket_kid_quantity: 3,
                },
                {
                    type: 'discound',
                    ticket_adult_price: 500,
                    ticket_adult_quantity: 2,
                    ticket_kid_price: 250,
                    ticket_kid_quantity: 1,
                }
            ],
            user_id: "00460",
            created: "2021-01-11 13:22:09",
        }
    ]

    const barcodeGenerator = (quantity: number) => {
        let barcodes = []
        for (let i = 1; i <= quantity; i++) {
            barcodes.push({
                url: 'https://bitbucket.org/nevatrip/test-task/commits/11111111',
                barcode: Math.round(Math.random() * 100000000)
            })
        }
        return barcodes
    }


    const tableBody = useMemo(() => {
        return data.map(event => event.tiket_types
            .map((type, index) => <tr>
                {index == 0 ? <td rowSpan={event.tiket_types.length}> {event.id}</td> : null}
                {index == 0 ? <td rowSpan={event.tiket_types.length}> {event.event_id}</td> : null}
                {index == 0 ? <td rowSpan={event.tiket_types.length}> {event.event_date}</td> : null}
                <td>{type.type}</td>
                <td>{type.ticket_adult_price}</td>
                <td>{type.ticket_adult_quantity}</td>
                <td>{type.ticket_kid_price}</td>
                <td>{type.ticket_kid_quantity}</td>
                <td>{barcodeGenerator(type.ticket_adult_quantity + type.ticket_kid_quantity)
                    .map(barcode => <p><a href={barcode.url}>{barcode.barcode}</a></p>)}</td>
                {index == 0 ? <td rowSpan={event.tiket_types.length}> {event.user_id}</td> : null}
                {index == 0 ? <td rowSpan={event.tiket_types.length}> {event.tiket_types.reduce((acc, type) => {
                    return acc += type.ticket_adult_price * type.ticket_adult_quantity + type.ticket_kid_price * type.ticket_kid_quantity
                }, 0)}</td> : null}
                {index == 0 ? <td rowSpan={event.tiket_types.length}> {event.created}</td> : null}
            </tr>))
    }, [data])

    return (
        <div className={classes.container}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>event_id</th>
                        <th>event_date</th>
                        <th>ticket_type</th>
                        <th>ticket_adult_price</th>
                        <th>ticket_adult_quantity</th>
                        <th>ticket_kid_price</th>
                        <th>ticket_kid_quantity</th>
                        <th>barcode</th>
                        <th>user_id</th>
                        <th>equal_price</th>
                        <th>created</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
            <div className={classes.content}>
                <img className={classes.image} src='https://i.ibb.co/hgcCR3F/2022-10-25-08-31-57.png' width={400} />

                <p className={classes.description}>
                    Мое представление реализации задачи построения таблицы
                    основывается на оптимальной структуре входных данных.
                    На скриншоте отображена структура входных данных для указанной выше таблицы,
                    на основании которых таблица выстраивается динамически.
                    Данный подход позволяет сколь угодно добавлять и удалять ticket_types генерировать
                    barcodes и вычислять equal_price динамически.
                </p>
            </div>
        </div>);
}

export default JSTaskTable;