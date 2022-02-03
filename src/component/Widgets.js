import './Widgets.css';
import {Search} from "@mui/icons-material";
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon"/>
        <input type="text" placeholder="Search Twitter"/>
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'858551177860055040'}/>

        <TwitterTimelineEmbed sourceType="profile" screenName="React" options={{height: 400}}/>

        <TwitterShareButton
          url={'https://facebook.com/cleverprogrammer'}
          options={{text: '#reactjs is awesome', via: 'RukshanNuwan'}}
        />
      </div>
    </div>
  );
};

export default Widgets;
