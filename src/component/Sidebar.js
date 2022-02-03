import TwitterIcon from '@mui/icons-material/Twitter';
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline, MoreHoriz,
  NotificationsNone,
  PermIdentity, Tag
} from "@mui/icons-material";
import {Button} from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className='sidebar__twitterIcon'/>

      <SidebarOption text="Home" Icon={Home} active/>
      <SidebarOption text="Explore" Icon={Tag}/>
      <SidebarOption text="Notifications" Icon={NotificationsNone}/>
      <SidebarOption text="Messages" Icon={MailOutline}/>
      <SidebarOption text="Bookmarks" Icon={BookmarkBorder}/>
      <SidebarOption text="Lists" Icon={ListAlt}/>
      <SidebarOption text="Profile" Icon={PermIdentity}/>
      <SidebarOption text="More" Icon={MoreHoriz}/>

      <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  );
};

export default Sidebar;
