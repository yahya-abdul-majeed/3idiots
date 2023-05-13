import './ChatMessage.css';

export default function ChatMessage(){


    return(<div className='ChatMessageMain'>
        <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/168/168724.png" style={{height:'40px',borderRadius:'10px',marginTop:'5px'}}/>
        <div>
        <p className='m-0'>mmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset  </p>
        <p style={{fontSize:'10px'}}> Sent at 12:04..</p>
        </div>
    </div>)
}