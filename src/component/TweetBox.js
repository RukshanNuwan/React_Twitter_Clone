import {useState} from "react";
import {Avatar, Button} from "@mui/material";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '../firebase';
import './TweetBox.css';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    const colRef = collection(db, 'posts');

    addDoc(colRef, {
      avatar: 'https://avatars.githubusercontent.com/u/39560159?v=4',
      displayName: 'Rukshan Nuwan',
      image: tweetImage,
      isVerified: true,
      text: tweetMessage,
      timeStamp: serverTimestamp(),
      userName: 'rukshannuwan',
    }).then(() => console.log('data added'));

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/39560159?v=4"/>

          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={e => setTweetMessage(e.target.value)}
          />
        </div>

        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
        />

        <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
