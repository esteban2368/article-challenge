import {parseISO, format} from 'date-fns'

const Date = ({dateString}) => {
    const date = parseISO(dateString);
    return (
        <time className="font-medium text-sm text-gray-400" dateTime={dateString}>{format(date,'dd LLLL yyyy')}</time>
    )
} 

export default Date