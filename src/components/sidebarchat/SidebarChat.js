import React, { useState, useEffect } from "react";
import db from '../../firebase';
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

const SidebarChat = ({ addNewChat,name }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
        //do db operations
        db.collection('rooms').add({
            name:roomName,
        })
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <div className="sidebarChat__info">
        <h2>Add new Chat</h2>
      </div>
    </div>
  );
};

export default SidebarChat;
