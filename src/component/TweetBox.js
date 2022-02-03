import './TweetBox.css';
import {Avatar, Button} from "@mui/material";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/39560159?v=4"/>
          <input type="text" placeholder="What's happening?"/>
        </div>
        <input className='tweetBox__imageInput' type="text" placeholder="Optional: Enter image URL"/>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
