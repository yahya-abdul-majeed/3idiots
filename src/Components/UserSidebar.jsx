import Navbar from "./Navbar"
import SidebarChat from "./SidebarChat"
import UserAvatarAndName from "./UserAvatarAndName"
import './UserSidebar.css'

export default function UserSidebar(){
    return(<div className="col-3" style={{background:"#424549"}}>
            <Navbar/>
            <UserAvatarAndName/>
           {/* <div className="row" style={{marginLeft:'10px',marginTop:'20px'}}>
            <div className="col-5">
                    <SidebarChat/>
                </div>
                <div className="col-5">
                    <SidebarChat/>
                </div>
                <div className="col-5">
                    <SidebarChat/>
                </div>
                <div className="col-5">
                    <SidebarChat/>
                </div>
                <div className="col-5">
                    <SidebarChat/>
                </div>
           </div> */}
           <SidebarChat/>
           <SidebarChat/>
           <SidebarChat/>

        </div>)
}
