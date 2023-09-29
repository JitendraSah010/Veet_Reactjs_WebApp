import PreviousMeetingCard from "../component/MeetingCard";
import "./Home.css";
import MeetingCard from "../component/MeetingCard";
import { useState, useEffect } from "react";
function Home() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let [loader, setloader] = useState(true);
  let [meetings, setMeetings] = useState([]);
  // Fetching the data
  useEffect(() => {
    fetch("https://vmeet-f7c0e-default-rtdb.firebaseio.com/vmeet.json")
      .then((fetchedData) => {
        return fetchedData.json();
      })
      .then((data) => {
        let tempMeetings = [];
        for (let key in data) {
          let Meeting = { id: key, ...data[key] };
          tempMeetings.push(Meeting);
          setMeetings(tempMeetings);
          // console.log(meetings)   //here data is not present inside main array because the main array is outsie the fetch function but we are consoling that data too early before saving it.
        }
      });
  }, []);

  return (
    <div className="main-container">
      <h2 className="UpcomingMeetings"> Previous meetings </h2>
      <div className="Card-Container">
        {
          //Rendring all the previous meetings
          meetings
            .filter((singleMeeting) => {
              let today = new Date();
              return new Date(singleMeeting.Date) < today;
            })
            .sort((a, b) => {
              let dateA = new Date(a.Date);
              let dateB = new Date(b.Date);
              //compare
              if (dateB < dateA) {
                return -1;
              } else if (dateA > dateB) {
                return 1;
              } else {
                return 0;
              }
            })
            .map((singleMeeting) => {
              let date = new Date(singleMeeting.Date);
              let fDate = date.toLocaleDateString("en", options);
              let meetingTime = date.toLocaleTimeString("en", {
                hour: "2-digit",
                minute: "2-digit",
              });
              let FinalTime = meetingTime + " " + fDate;
              let MeetingImg =
                "https://source.unsplash.com/1600x800/?" + singleMeeting.Img;

              // sorting
              meetings.sort((a, b) => {
                // let sorted=todos.sort((a,b)=>{
                let dateA = new Date(a.time);
                let dateB = new Date(b.time);
                //compare
                if (dateA < dateB) {
                  return -1;
                } else if (dateA > dateB) {
                  return 1;
                } else {
                  return 0;
                }
              });

              return (
                <MeetingCard
                  title={singleMeeting.Title}
                  img={MeetingImg}
                  desc={singleMeeting.Desc}
                  time={FinalTime}
                />
              );
            })
        }
      </div>
    </div>
  );
}

export default Home;
