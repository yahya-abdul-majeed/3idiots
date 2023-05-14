import './SidebarChat.css';

export default function SidebarChat({chat, avatar, index, onClickHandler}){
    return(<div onClick={()=>{onClickHandler(chat)}} className="SidebarChatMain container-fluid">
        <img className="img-fluid" src={avatar? avatar : `https://cdn-icons-png.flaticon.com/512/168/16872${index}.png`} style={{height:'40px',borderRadius:'10px',marginTop:'5px'}}/>
        <p><b >{chat?.usernames[0]}</b></p>
    </div>)
}