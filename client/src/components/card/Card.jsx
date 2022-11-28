import "./card.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useState } from "react";

const Card = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleNofitication = () => {
    setLiked(true);
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} className="userImg" alt="" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} className="postImg" alt="" />
      <div className="interaction">
        {liked ? (
          <img src={FavoriteOutlinedIcon} className="cardIcon" alt="" />
        ) : (
          <img
            src={FavoriteBorderOutlinedIcon}
            className="cardIcon"
            alt=""
            onClick={handleNofitication}
          />
        )}
        <img src={ChatBubbleOutlineOutlinedIcon} className="cardIcon" alt="" />
        <img src={ShareOutlinedIcon} className="cardIcon" alt="" />
        <img src={InfoOutlinedIcon} className="cardIcon infoIcon" alt="" />
      </div>
    </div>
  );
};

export default Card;
