import './MeetingCard.css';

// MeetingCard UI in card format.
/*
function MeetingCard(props){
    return(
        <div className='Meeting-card'>
            <img src={props.img} className='meeting-img' />
            <p> {props.time} </p>
            <h3> {props.title} </h3>
            <p className='meeting-desc'>  {props.desc} </p>
            <button className='meeting-btn' >Join Meeting</button>
        </div>
    );
}
export default MeetingCard;
*/


function MeetingCard(props){
    return(
        <div className='Meeting-card1'>
            <div className='content-flex'>
                <h2> {props.title} </h2>
                <p className='date' > {props.time} </p>
                <p className='meeting-desc1'>  {props.desc} </p>
                <button className='meeting-btn1' >Join Meeting</button>
            </div>

            <div className='img-flex' >
                <img src={props.img} className='meeting-img1' />
            </div>
        </div>
    );
}
export default MeetingCard;
