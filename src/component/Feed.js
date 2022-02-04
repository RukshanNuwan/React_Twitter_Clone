import {useEffect, useState} from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import {collection, onSnapshot, query, orderBy} from 'firebase/firestore';
import {db} from "../firebase";
import FlipMove from "react-flip-move";
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, 'posts');
    const q = query(colRef, orderBy('timeStamp', 'desc'));

    onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>feed</h2>
      </div>

      <TweetBox/>

      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            avatar={post.avatar}
            displayName={post.displayName}
            userName={post.userName}
            image={post.image}
            text={post.text}
            isVerified={post.isVerified}
            timeStamp={post.timeStamp}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
