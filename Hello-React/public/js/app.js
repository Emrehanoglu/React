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

//class component
var ToDoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(ToDoApp, _React$Component);
  var _super = _createSuper(ToDoApp);
  function ToDoApp(props) {
    var _this;
    _classCallCheck(this, ToDoApp);
    _this = _super.call(this, props);
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    _this.state = {
      items: ["görev1", "görev2", "görev3"]
    };
    return _this;
  }
  _createClass(ToDoApp, [{
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (this.state.items.indexOf(item) > -1) {
        return 'aynı elemanı ekleyemezsiniz';
      }
      this.setState(function (prevState) {
        /* prevState ile onceki items hali gelir */
        return {
          items: prevState.items.concat(item)
        }; /* concat ile ekleme işlemi yaptık */
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = {
        title: "ToDo Uygulaması",
        description: "Bekleyen Görevler"
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: data.title,
        description: data.description
      }), /*#__PURE__*/React.createElement(ToDoList, {
        items: this.state.items,
        clear: this.clearItems,
        deleteItem: this.deleteItem
      }), /*#__PURE__*/React.createElement(NewItem, {
        addItem: this.addItem
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Uygulama olusturuldu/yuklendi");
      var json_obje = localStorage.getItem("items");
      var items = JSON.parse(json_obje);
      if (items) {
        this.setState({
          items: items
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log("Uygualama içerisinde veriler değişti");
      if (prevState.items.length !== this.state.length) {
        /* önceki state bilgileri mevcuttaki state arasında bir farklılık var ise */
        var json_str = JSON.stringify(this.state.items);
        /* LS üzerinde JSON türünde string ifade saklayabiliyorduk */
        localStorage.setItem("items", json_str);
      }
    }
  }]);
  return ToDoApp;
}(React.Component);
function ToDoList(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, props.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(ToDoItem, {
      deleteItem: props.deleteItem,
      key: index,
      item: item
    });
  })), /*#__PURE__*/React.createElement("button", {
    onClick: props.clear
  }, "Temizle"));
}

/* class ToDoList extends React.Component{    
    render(){
        return (
            <div>
                <ul>
                    {this.props.items.map((item,index) => <ToDoItem deleteItem={this.props.deleteItem} key={index} item={item}/>)} 
                </ul>
                <button onClick={this.props.clear}>Temizle</button>
            </div>
        )
    }
} */

function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, props.title), /*#__PURE__*/React.createElement("p", null, props.description));
}

/* class Header extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
} */
var NewItem = /*#__PURE__*/function (_React$Component2) {
  _inherits(NewItem, _React$Component2);
  var _super2 = _createSuper(NewItem);
  function NewItem(props) {
    var _this2;
    _classCallCheck(this, NewItem);
    _this2 = _super2.call(this, props);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: ""
    };
    return _this2;
  }
  _createClass(NewItem, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      /* burada dışarıdan bir parametre almadığım için bind işlemi yapmadım */
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim(); /* trim ile sağında solunda bosluk var ise siliyorum */
      if (item) {
        e.target.elements.txtItem.value = "";
        var error = this.props.addItem(item);
        this.setState({
          error: error
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Ekle")));
    }
  }]);
  return NewItem;
}(React.Component);
function ToDoItem(props) {
  return /*#__PURE__*/React.createElement("li", null, props.item, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      props.deleteItem(props.item);
    }
  }, "x"));
}

/* class ToDoItem extends React.Component{
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
    deleteItem(){
        this.props.deleteItem(this.props.item)
    }
    render(){
        return (
            <li>
                {this.props.item}
                <button onClick={this.deleteItem}>x</button>
            </li>
        )
    }
} */

root.render( /*#__PURE__*/React.createElement(ToDoApp, null));
