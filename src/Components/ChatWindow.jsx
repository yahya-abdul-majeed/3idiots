import ChatMessage from './ChatMessage'
import axios from 'axios';
import { useEffect, useState } from "react";
import './ChatWindow.css'

export default function ChatWindow(){
    const [query,setQuery] = useState('')
    const [reply, setReply]= useState('')
    console.log("this is reply",reply)
    

    const promptURL = "http://ec2-43-207-224-175.ap-northeast-1.compute.amazonaws.com:8000/api/knowledge/chat/"
    const promptOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization':'Token 34f3e85bfb994a4029865824988e6c0e1fbe13c1'
        },
        body: JSON.stringify({
            query
        })
    }

    const handleSend = (event) =>{
        axios.post(promptURL,JSON.stringify({
            query: query
        }),{
            headers: {
                'content-type': 'application/json',
                'Authorization':'Token 34f3e85bfb994a4029865824988e6c0e1fbe13c1'
            }
        })
        .then(res=> res.data)
        .then(data => setReply(data.answer))
    }

    useEffect(()=>{

    },[reply,handleSend])

    


    const handleChangeForPrompt = (event) =>{
        setQuery(event.target.value)
        console.log(query)
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
            <ChatMessage answer={reply}/>
            
        </div>
        <div className='typeBar'>
            <input value={query} onChange={handleChangeForPrompt} type='search' placeholder='enter prompt'/>  
            <span style={{gridColumn:2,color:'white'}}><i class="bi bi-plus-circle"></i></span>  
            <span onClick={handleSend} style={{gridColumn:3,color:'white'}}><i class="bi bi-send-fill"></i></span>  
        </div>
    </div>)
}