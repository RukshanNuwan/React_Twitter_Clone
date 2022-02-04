import './Post.css';
import {Avatar} from "@mui/material";
import {ChatBubbleOutline, FavoriteBorder, Publish, Repeat, Verified} from "@mui/icons-material";

const Post = ({displayName, userName, isVerified, timeStamp, text, image, avatar}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar}/>
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {isVerified && <Verified className="post__badge"/>}
                @{userName} 1h ago
              </span>
            </h3>
          </div>

          <div className="post__headerDescription">
            <p>
              {text}
              {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae eum, excepturi fuga ipsam magnam*/}
              {/*  maxime molestias nulla numquam officia optio perferendis quis sed similique soluta sunt tenetur, veritatis*/}
              {/*  voluptate.*/}
            </p>
          </div>
        </div>

        <img src={image} alt=""/>

        <div className="post__footer">
          <ChatBubbleOutline fontSize="small"/>
          <Repeat fontSize="small"/>
          <FavoriteBorder fontSize="small"/>
          <Publish fontSize="small"/>
        </div>
      </div>
    </div>
  );
};

export default Post;
