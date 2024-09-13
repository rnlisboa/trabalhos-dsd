import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Mens() {
    
    const [messagesend, setMessageSend] = useState<string>("");
    const [response, setResponse] = useState<string[]>([""]);

    const handleSendMessage = () => {
        axios.get(`http://localhost:8080/send?message=${messagesend}`)
        .then(res => setResponse(res.data))
        .catch(err => console.error(err));

        setMessageSend('');
    };

    useEffect(() =>{
          axios.get(`http://localhost:8080/messages`)
          .then(res => setResponse(res.data))
          .catch(e => console.error(e));
    });
    
    return (
        <div>
            <h1>RabbitMQ Message Sender</h1>
            <textarea
                value={messagesend}
                onChange={(e) => setMessageSend(e.target.value)}
                placeholder="Enter your message"
            />
            <button onClick={handleSendMessage}>Send Message</button>
            <Link to="/menssagens">visualizar lista de mensagens</Link>
            {/* {response.map(e => `<p>${e}</p`)} */}
        </div>
    )
}