import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
      <div className="nav-container">
        <h1 className="logo">VMEET</h1>
        <div>
          <Link to={"/"} className="links">Home</Link>
          <Link to={"/PreviousMeetings"} className="links">Previous Meetings</Link>
          <Link to={"/AddMeeting"} className="links">Add Meeting</Link>
        </div>
      </div>
  );
}
export default Navigation;
