function getMonthString(num) {
    let month = ''

    switch (num) {
        case 0:
            month = 'January'
            break
        case 1:
            month = 'February'
            break
        case 2:
            month = 'March'
            break
        case 3:
            month = 'April'
            break
        case 4:
            month = 'May'
            break
        case 5:
            month = 'June'
            break
        case 6:
            month = 'July'
            break
        case 7:
            month = 'August'
            break
        case 8:
            month = 'September'
            break
        case 9:
            month = 'October'
            break
        case 10:
            month = 'November'
            break
        case 11:
            month = 'December'
            break
    }

    return month
}

const DateString = ({date}) => {
    const day = date.getDate()
    const month = getMonthString(date.getMonth())
    const year = date.getFullYear()

    return (
        <>
            <span>{day} {month} {year}</span>
        </>
    );
}

export default DateString