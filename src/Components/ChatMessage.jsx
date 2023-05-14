import './ChatMessage.css';



export default function ChatMessage({dm}){

    return(<div className='ChatMessageMain'>
        <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/168/168724.png" style={{height:'40px',borderRadius:'10px',marginTop:'5px'}}/>
        <div>
        <p className='m-0'>{dm.msg}</p>
        <p style={{fontSize:'10px'}}> {dm.ts}</p>
        </div>
    </div>)
}