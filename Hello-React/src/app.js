var template = 
<div>
    <h1>My first react app2</h1>
    <div>Lorem ipsum dolor sit amet.</div>
    <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
    </ul>
</div> /* bu yazım şeklime JSX : JSON XML denir. */
var root = ReactDOM.createRoot(document.getElementById('root'))
root.render(template)