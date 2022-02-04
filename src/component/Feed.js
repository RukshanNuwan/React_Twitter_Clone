import {useEffect, useState} from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import {collection, onSnapshot, query, orderBy} from 'firebase/firestore';
import './Feed.css';
import {db} from "../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, 'posts');
    const q = query(colRef, orderBy('timeStamp','desc'));

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

      {/*<Post*/}
      {/*  avatar="https://avatars.githubusercontent.com/u/39560159?v=4"*/}
      {/*  displayName="Rukshan Nuwan"*/}
      {/*  userName="rukshannuwan"*/}
      {/*  image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"*/}
      {/*  text="I challenge you to build a twitter clone with react"*/}
      {/*  isVerified={true}*/}
      {/*  timeStamp="8h"*/}
      {/*/>*/}
    </div>
  );
};

export default Feed;
