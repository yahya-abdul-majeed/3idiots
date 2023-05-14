import './UserAvatarAndName.css';

export default function UserAvatarAndName({user}){
    return(
    <div className="UserAvatarAndNameMain container-fluid m-2">
        <img className="img-fluid rounded" src={user.me.avatarUrl} alt="avatar" style={{height:"50px", background: 'grey'}}/>
        <p className='mt-3'><b>{user.me.name}</b></p>
        <span><i class="bi bi-gear-wide-connected"></i></span>
    </div>)
}