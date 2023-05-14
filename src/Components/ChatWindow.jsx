import ChatMessage from './ChatMessage'
import axios from 'axios';
import { useEffect, useState } from "react";
import './ChatWindow.css'
import { event } from 'jquery';

export default function ChatWindow({user,chattingTo,dms, currentRoom, chatim, reloadMsgs}){

    const [message, setMessage] = useState('')
    

    const handleMessageInputChange = (event) =>{
        setMessage(event.target.value)
    }

    const handleMessageSubmit = () => {
        let headers = {
            headers: {
                'X-Auth-Token': user.authToken,
                'X-User-ID': user.userId,
                'content-type': 'application/json'
            }
        }
        let data = {
            'message':{
                'rid':currentRoom,
                'msg': message
            }
        }

        axios.post("https://rocketchat.smkt.fun/api/v1/chat.sendMessage",data,headers)
        setMessage('')
        reloadMsgs(chatim)
    }

    return(<div className=" ChatWindowMain col-9" style={{background:"#282b30",color:"white"}}>
        
        
        <div className='infoBar'>
            <img className="img-fluid rounded" src="https://cdn-icons-png.flaticon.com/512/168/168728.png" alt="avatar" style={{height:"50px", background: 'grey'}}/>
            <div className='nameLastSeen'>
                <p className='name'><b>Aditya Lohuni</b></p>
                <p className='lastSeen'>Last seen...</p>
            </div>
        </div>
        <div className='messageInterface'>
            {
                dms?.reverse().map(dm=> <ChatMessage dm={dm}/>)
            }
            
        </div>
        <div className='typeBar'>
            <input value={message} onChange={handleMessageInputChange} id="message" type='search' placeholder='enter prompt'/>  
            <span style={{gridColumn:2,color:'white'}}><i class="bi bi-plus-circle"></i></span>  
            <span onClick={handleMessageSubmit} style={{gridColumn:3,color:'white'}}><i class="bi bi-send-fill"></i></span>  
        </div>
    </div>)
}