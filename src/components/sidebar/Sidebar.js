import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import {
  Chat as ChatIcon,
  DonutLarge as DonutLargeIcon,
  MoreVert as MoreVertIcon,
  SearchOutlined,
} from "@material-ui/icons";

import SidebarChat from "../sidebarchat/SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
          <SidebarChat addNewChat/>
          <SidebarChat/>
          <SidebarChat/>          
          
      </div>
    </div>
  );
};

export default Sidebar;
