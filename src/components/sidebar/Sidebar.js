import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import {
  Chat as ChatIcon,
  DonutLarge as DonutLargeIcon,
  MoreVert as MoreVertIcon,
  SearchOutlined,
} from "@material-ui/icons";
import db from "../../firebase";
import SidebarChat from "../sidebarchat/SidebarChat";
import { useStateValue } from "../../StateProvider";



const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{user},dispatch]=useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL}/>
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
        <SidebarChat addNewChat />
        {rooms.map(room=>(
            <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
        ))}       
      </div>
    </div>
  );
};

export default Sidebar;
