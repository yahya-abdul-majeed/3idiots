import ChatMessage from './ChatMessage'
import './ChatWindow.css'

export default function ChatWindow(){
    return(<div className=" ChatWindowMain col-9" style={{background:"#282b30",color:"white"}}>
        
        <div className='infoBar'>
            <img className="img-fluid rounded" src="https://cdn-icons-png.flaticon.com/512/168/168728.png" alt="avatar" style={{height:"50px", background: 'grey'}}/>
            <div className='nameLastSeen'>
                <p className='name'><b>Aditya Lohuni</b></p>
                <p className='lastSeen'>Last seen...</p>
            </div>
        </div>
        <div className='messageInterface'>
            <ChatMessage/>
            <ChatMessage/>
            <ChatMessage/>
            <ChatMessage/>
            <ChatMessage/>
            <ChatMessage/>
        </div>
        <div className='typeBar'>
            <input type='search'/>  
            <span style={{gridColumn:2,color:'white'}}><i class="bi bi-plus-circle"></i></span>  
            <span style={{gridColumn:3,color:'white'}}><i class="bi bi-send-fill"></i></span>  
        </div>
    </div>)
}