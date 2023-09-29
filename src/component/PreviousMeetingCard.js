import './Home.css'
function previousMeetingCard() {
  return (
    <div className="Meeting-card1">
      <h2> {props.title} </h2>
      {/* <img src='https://source.unsplash.com/1600x800/?nature' className='meeting-img1' /> */}
      <p className="date"> {props.time} </p>
      <p className="meeting-desc1"> {props.desc} </p>
      <button className="meeting-btn1">Join Meeting</button>
    </div>
  );
}
export default previousMeetingCard;
