import './Viewentry.css';
import { useParams } from 'react-router-dom';
import moment from 'moment';


function Viewentry(...props) {
    let { id } = useParams();
    return (
        <div>

            <div className="viewentry">
                <div className="view-title">{props[0].data.data.diaryentry[id].title}</div>
                <div className="view-date">{moment(props[0].data.data.diaryentry[id].date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
                <div className="view-data">{props[0].data.data.diaryentry[id].entry}</div>
            </div>
        </div>
    )
}
export default Viewentry;