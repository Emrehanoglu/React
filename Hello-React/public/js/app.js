"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
  root.render( /*#__PURE__*/React.createElement(App, null));
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
  root.render( /*#__PURE__*/React.createElement(App, null));
}
var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);
  var _super = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Product App"), /*#__PURE__*/React.createElement("p", null, "Toplam Se\xE7ilen \xDCr\xFCn Say\u0131s\u0131 : ", this.props.selectProducts.length));
    }
  }]);
  return Header;
}(React.Component);
var NewProduct = /*#__PURE__*/function (_React$Component2) {
  _inherits(NewProduct, _React$Component2);
  var _super2 = _createSuper(NewProduct);
  function NewProduct() {
    _classCallCheck(this, NewProduct);
    return _super2.apply(this, arguments);
  }
  _createClass(NewProduct, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
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
      }, "Ekle"));
    }
  }]);
  return NewProduct;
}(React.Component);
var ProductList = /*#__PURE__*/function (_React$Component3) {
  _inherits(ProductList, _React$Component3);
  var _super3 = _createSuper(ProductList);
  function ProductList() {
    _classCallCheck(this, ProductList);
    return _super3.apply(this, arguments);
  }
  _createClass(ProductList, [{
    key: "render",
    value: function render() {
      return this.props.products.map(function (product, index) {
        return /*#__PURE__*/React.createElement(Product, {
          product: product,
          key: index
        });
      });
    }
  }]);
  return ProductList;
}(React.Component);
var Product = /*#__PURE__*/function (_React$Component4) {
  _inherits(Product, _React$Component4);
  var _super4 = _createSuper(Product);
  function Product() {
    _classCallCheck(this, Product);
    return _super4.apply(this, arguments);
  }
  _createClass(Product, [{
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/React.createElement("div", {
        className: "product-details"
      }, /*#__PURE__*/React.createElement("h2", null, this.props.product.name), this.props.product.price, /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: function onClick(event) {
          return productAdd(event, _this.props.product);
        }
      }, "\xDCr\xFCn Ekle"));
    }
  }]);
  return Product;
}(React.Component);
var App = /*#__PURE__*/function (_React$Component5) {
  _inherits(App, _React$Component5);
  var _super5 = _createSuper(App);
  function App() {
    _classCallCheck(this, App);
    return _super5.apply(this, arguments);
  }
  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        selectProducts: selectedProducts
      }), /*#__PURE__*/React.createElement(NewProduct, null), /*#__PURE__*/React.createElement(ProductList, {
        products: product
      }));
    }
  }]);
  return App;
}(React.Component);
root.render( /*#__PURE__*/React.createElement(App, null));
