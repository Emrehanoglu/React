"use strict";

var root = ReactDOM.createRoot(document.getElementById('root'));
var product = [{
  name: "Iphone11",
  price: 20000
}, {
  name: "Iphone12",
  price: 30000
}];
var selectedProducts = [];
function productAdd(event, product) {
  console.log(event.target, product.name);
  selectedProducts.push(product.name);
  renderApp();
}
function saveProduct(event) {
  event.preventDefault(); /* submit edilen sayfanın refresh edilmesinin önüne geçer */
  var pname = event.target.elements.productName.value;
  var pprice = event.target.elements.productPrice.value;
  var newProduct = {
    name: pname,
    price: pprice
  };
  product.push(newProduct);
  event.target.elements.productName.value = "";
  event.target.elements.productPrice.value = "";
  renderApp();
}
function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: saveProduct
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "productName",
    id: "productName"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "productPrice",
    id: "productPrice"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Ekle")), /*#__PURE__*/React.createElement("h1", null, "My first react app"), /*#__PURE__*/React.createElement("h2", null, "Toplam Se\xE7ilen \xDCr\xFCn Say\u0131s\u0131 : ", selectedProducts.length), /*#__PURE__*/React.createElement("div", null, product.map(function (product, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement("h2", null, product.name), product.price, /*#__PURE__*/React.createElement("button", {
      type: "button",
      id: index,
      onClick: function onClick(event) {
        return productAdd(event, product);
      }
    }, "\xDCr\xFCn Ekle"));
  }))); /* bu yazım şekline JSX : JSON XML denir. */
  root.render(template);
}
renderApp();
