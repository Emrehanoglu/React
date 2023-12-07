import {useEffect, useState} from "react"

function App(props) {
  const [count,setCount] = useState(props.count)
  const [text, setText] = useState(props.text)
  useEffect(() => {
    console.log("componentDidMount")
  },[]) /* componentDiDMount yani uygulama cağırıldığında calısır, kullanım sekli bu sekilde sonunda köşeli parantez olacak */
  useEffect(() => {
    console.log("updateDidMount")
  },[count]) /* sadece count objesinin değeri değiştiğinde bu metot çalışmış olacak. Hangi state verildiyse onun değeri değişince calısır. */
  return (
    <div className="container">
      <p>Butona {count} defa tıkladınız</p>
      <button className="btn btn-dark" onClick={() => setCount(count+1)}>+1</button>
      <button className="btn btn-dark" onClick={() => setCount(count-1)}>-1</button>
      <button className="btn btn-dark" onClick={() => setCount(0)}>Reset</button>
      <br /><br /><br />
      
      <h1>text içeriği : {text}</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

App.defaultProps= {
  count: 2,
  text: 'E'
}

export default App;
