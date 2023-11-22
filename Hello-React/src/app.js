var root = ReactDOM.createRoot(document.getElementById('root'))

let product = [
    {name:"Iphone11", price:20000},
    {name:"Iphone12", price:30000}
]

let selectedProducts = []

function productAdd(event,product){
    console.log(event.target, product.name)
    selectedProducts.push(product.name)
    renderApp()
}

 function saveProduct(event){
    event.preventDefault();/* submit edilen sayfanın refresh edilmesinin önüne geçer */
    var pname = event.target.elements.productName.value
    var pprice = event.target.elements.productPrice.value
    var newProduct = {
        name:pname,
        price:pprice
    }
    product.push(newProduct)
    event.target.elements.productName.value = ""
    event.target.elements.productPrice.value = ""
    renderApp()
}

function renderApp(){
    var template = 
    <div>
        <form onSubmit={saveProduct}>
            <input type="text" name="productName" id="productName" />
            <input type="text" name="productPrice" id="productPrice" />
            <button type="submit">Ekle</button>
        </form>

        <h1>My first react app</h1>
        <h2>Toplam Seçilen Ürün Sayısı : {selectedProducts.length}</h2>
        <div >
            { product.map((product,index) => 
                <div key={index}>
                    {<h2>{product.name}</h2>}
                    {product.price}   
                    <button type="button" id={index} onClick={(event) => productAdd(event,product)}>Ürün Ekle</button>   
                </div>
            )}     
        </div>
    </div> /* bu yazım şekline JSX : JSON XML denir. */
    root.render(template)
}

renderApp()