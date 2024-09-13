import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Cons() {
    const [response, setResponse] = useState<string[]>([""]);

    useEffect(() =>{
        axios.get(`http://localhost:8080/messages`)
        .then(res => setResponse(res.data))
        .catch(e => console.error(e));
  });

  return (
    <>
       <div className="card">
          <h1>Lista de mensagens</h1>
           <p>
            {response.map(resp => `${resp}`)}
            </p>
           <Link to="../">Enviar mensagem</Link> 
       </div>
    </>
  );
}