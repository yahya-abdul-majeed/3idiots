import './UserAvatarAndName.css';

export default function UserAvatarAndName(){
    return(<div className="UserAvatarAndNameMain container-fluid m-2">
        <img className="img-fluid rounded" src="https://cdn-icons-png.flaticon.com/512/168/168726.png" alt="avatar" style={{height:"50px", background: 'grey'}}/>
        <p><b>Yahya</b></p>
    </div>)
}