import { useState } from "react";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import ChatWindow from "../Components/ChatWindow";
import Navbar from "../Components/Navbar";
import UserSidebar from "../Components/UserSidebar";
import './ChatInterfacePage.css'
import Profile from "../Components/Auth/Profile";
import axios from "axios";

export default function ChatInterfacePage(){
    const [user,setUser] = useState(null)
    const [chattingTo, setChattingTo] = useState(null) // this is a user id
    const [dmMessages, setDmMessages] = useState([])
    const [currentRoom,setCurrentRoom] = useState()
    const [localChatIM, setLocalChatIM] = useState()
    const [loginFormData,setLoginFormData] = useState({
        user:'',
        password:'',
    })
    const [registerFormData,setRegisterFormData] = useState({
        username:'',
        email:'',
        pass:'',
        name:''
    })


    const handleChangeLogin = (event) =>{
        setLoginFormData((prevState)=>({
            ...prevState,
            [event.target.id]: event.target.value            
        }))
    }
    const handleChangeRegister = (event) =>{
        setRegisterFormData((prevState)=>({
            ...prevState,
            [event.target.id]: event.target.value            
        }))
    }

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          };
        axios.post("https://rocketchat.smkt.fun/api/v1/login",JSON.stringify(loginFormData),requestOptions)
        .then(res=>setUser(res.data.data, console.log("logging user",user)))
        
    }
    const handleSubmitRegister = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          };
    event.preventDefault();
    axios.post("https://rocketchat.smkt.fun/api/v1/users.register",JSON.stringify(registerFormData),requestOptions)
    .then(res=>console.log(res.data))
    }

    const SidebarChatClickHandler = (chatIM) =>{
        setLocalChatIM(chatIM)
        setCurrentRoom(chatIM._id)
        const config = {
            headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': user.authToken,
            'X-User-Id': user.userId,
        }}
        axios.get(`https://rocketchat.smkt.fun/api/v1/im.history?roomId=${chatIM._id}`,config)
        .then(res=>setDmMessages(res.data.messages))
        .then(setChattingTo(chatIM.uids[0],console.log(chattingTo)))
    }


    return(
    <div id="ChatInterfacePageMain" className="row" style={{height:"100%",width: "100%"}}>
        <UserSidebar SidebarChatClickHandler={SidebarChatClickHandler} user={user}/>
        {
            user? <ChatWindow user={user} chattingTo={chattingTo} dms={dmMessages}  currentRoom={currentRoom} reloadMsgs={SidebarChatClickHandler} chatim={localChatIM}/>:<Login handleChange = {handleChangeLogin} handleSubmit={handleSubmitLogin} formData = {loginFormData}/>
        }
    </div>)
}


//
//<Register  handleChange = {handleChangeRegister} handleSubmit={handleSubmitRegister} formData = {registerFormData}/>
//