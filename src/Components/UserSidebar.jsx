import Navbar from "./Navbar"
import SidebarChat from "./SidebarChat"
import UserAvatarAndName from "./UserAvatarAndName"
import './UserSidebar.css'

export default function UserSidebar(){
    return(<div className="col-3" style={{background:"#424549"}}>
            <Navbar/>
            <UserAvatarAndName/>
           
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>

        </div>)
}
