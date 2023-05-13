import ChatWindow from "../Components/ChatWindow";
import UserSidebar from "../Components/UserSidebar";
import './ChatInterfacePage.css'

export default function ChatInterfacePage(){
    return(<div id="ChatInterfacePageMain" className="row" style={{height:"100%",width: "100%"}}>
        <UserSidebar/>
        <ChatWindow/>
    </div>)
}