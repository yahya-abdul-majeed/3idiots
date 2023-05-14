import './ChatMessage.css';



export default function ChatMessage({answer}){

    return(<div className='ChatMessageMain'>
        <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/168/168724.png" style={{height:'40px',borderRadius:'10px',marginTop:'5px'}}/>
        <div>
        <p className='m-0'>{answer}</p>
        <p style={{fontSize:'10px'}}> Sent at 12:04..</p>
        </div>
    </div>)
}