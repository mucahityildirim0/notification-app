import "./navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Mucahit App</span>
      <div className="icons">
        <div className="icon">
          <img src={NotificationsNoneIcon} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={MessageOutlinedIcon} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={SettingsOutlinedIcon} className="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
