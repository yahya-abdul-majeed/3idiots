import { useState } from "react";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import ChatWindow from "../Components/ChatWindow";
import Navbar from "../Components/Navbar";
import UserSidebar from "../Components/UserSidebar";
import './ChatInterfacePage.css'
import Profile from "../Components/Auth/Profile";

export default function ChatInterfacePage(){
    const [user,setUser] = useState(true)
    return(
    <div id="ChatInterfacePageMain" className="row" style={{height:"100%",width: "100%"}}>
        <UserSidebar/>
        {
            user ? <ChatWindow/>:<Profile/>
        }
        
       
    </div>)
}