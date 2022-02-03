import './Feed.css';
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>feed</h2>
      </div>

      <TweetBox/>

      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
};

export default Feed;
