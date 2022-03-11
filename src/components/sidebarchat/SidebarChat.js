import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import db from '../../firebase';
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

const SidebarChat = ({ addNewChat,name,id }) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(()=>{
    if(id){
      db.collection("rooms").doc(id).collection("messages").orderBy("timestamp","desc")
      .onSnapshot(snapshot=>( 
        setMessages(snapshot.docs.map(doc=>
          doc.data()
          ))
      ))
    }
  },[id]);

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
    <NavLink to={`/rooms/${id}`}>
        <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>
          {
            `${messages[0]?.message.slice(0,12)}...`
          }
          </p>
      </div>
    </div>
    </NavLink>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <div className="sidebarChat__info">
        <h2>Add new Chat</h2>
      </div>
    </div>
  );
};

export default SidebarChat;
