import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import SidebarChat from "./SidebarChat"
import UserAvatarAndName from "./UserAvatarAndName"
import './UserSidebar.css'
import axios from "axios"

export default function UserSidebar({user, SidebarChatClickHandler}){

        const [chatList, setChatList] = useState([])
        useEffect(()=>{           
                if(user){
                        const options = {
                                headers: {
                                        'Content-Type': 'application/json',
                                        'X-Auth-Token': user.authToken,
                                        'X-User-Id': user.userId,
                                }
                        }
                        console.log(options)
                        axios.get("https://rocketchat.smkt.fun/api/v1/im.list",options)
                        .then(res=>setChatList(res.data.ims, console.log("this is chatlist",chatList)))  
                }
        },[user])
       
        if(user){     
                return(
                        <div className="col-3" style={{background:"#424549"}}>
                                <Navbar/>
                                <UserAvatarAndName user={user}/>  
                                
                                {
                                        chatList?.map((chatData,Index) => { //not getting avatars because error 429, too many requests 
                                                let image
                                                // console.log(Index) 
                                                // axios.get(`https://rocketchat.smkt.fun/api/v1/users.getAvatar?userId=${chatData.uids[0]}`) 
                                                // .then(res=>console.log("this is res data",res.data)) 
                                                // .then((img)=>{image = img})
                                                return <SidebarChat onClickHandler={SidebarChatClickHandler} key={Index} avatar={image}  chat={chatData} index={Index}/>
                                        })
                                }
                        </div>)
        }else{
                return(
                        <div className="col-3" style={{background:"#424549"}}>
                                <Navbar/>
                        </div>)
        }
   
}
