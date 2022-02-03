import './Post.css';
import {Avatar} from "@mui/material";
import {ChatBubbleOutline, FavoriteBorder, Publish, Repeat, Verified} from "@mui/icons-material";

const Post = ({displayName, userName, isVerified, timeStamp, text, image, avatar}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://avatars.githubusercontent.com/u/39560159?v=4"/>
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Rukshan Nuwan
              <span className='post__headerSpecial'>
                <Verified className="post__badge"/>
                @rukshannuwan
              </span>
            </h3>
          </div>

          <div className="post__headerDescription">
            <p>
              I challenge you to build a twitter clone with react
              {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae eum, excepturi fuga ipsam magnam*/}
              {/*  maxime molestias nulla numquam officia optio perferendis quis sed similique soluta sunt tenetur, veritatis*/}
              {/*  voluptate.*/}
            </p>
          </div>
        </div>

        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>

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
