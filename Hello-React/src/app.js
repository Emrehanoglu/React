var root = ReactDOM.createRoot(document.getElementById('root'))

let product = [
    {name:"Iphone11", price:20000},
    {name:"Iphone12", price:30000}
]

let selectedProducts = []

function productAdd(event,product){
    console.log(event.target, product.name)
    selectedProducts.push(product.name)
    root.render(<App />)
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
    root.render(<App />)
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Product App</h1>
                <p>Toplam Seçilen Ürün Sayısı : {this.props.selectProducts.length}</p>
            </div>
        )
    }
}

class NewProduct extends React.Component{
    render(){
        return(
            <form onSubmit={saveProduct}>
                <input type="text" name="productName" id="productName" />
                <input type="text" name="productPrice" id="productPrice" />
                <button type="submit">Ekle</button>
            </form>
        )
    }
}

class ProductList extends React.Component{
    render(){
        return(
                this.props.products.map((product,index) => (
                    <Product product={product} key={index}/>
                ))    
        )
    }
}

class Product extends React.Component{
    render(){
        return(
            <div className="product-details">
                    {<h2>{this.props.product.name}</h2>}
                    {this.props.product.price}
                    <button type="button" onClick={(event) => productAdd(event,this.props.product)}>Ürün Ekle</button>   
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Header selectProducts={selectedProducts}/>
                <NewProduct />
                <ProductList products={product}/>
            </div>
        )
    } 
}

root.render(<App />)