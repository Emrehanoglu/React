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
        clear: this.clearItems
      }), /*#__PURE__*/React.createElement(NewItem, {
        addItem: this.addItem
      }));
    }
  }]);
  return ToDoApp;
}(React.Component);
var ToDoList = /*#__PURE__*/function (_React$Component2) {
  _inherits(ToDoList, _React$Component2);
  var _super2 = _createSuper(ToDoList);
  function ToDoList() {
    _classCallCheck(this, ToDoList);
    return _super2.apply(this, arguments);
  }
  _createClass(ToDoList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, this.props.items.map(function (item, index) {
        return /*#__PURE__*/React.createElement(ToDoItem, {
          key: index,
          item: item
        });
      })), /*#__PURE__*/React.createElement("button", {
        onClick: this.props.clear
      }, "Temizle"));
    }
  }]);
  return ToDoList;
}(React.Component);
var Header = /*#__PURE__*/function (_React$Component3) {
  _inherits(Header, _React$Component3);
  var _super3 = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super3.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.description));
    }
  }]);
  return Header;
}(React.Component);
var NewItem = /*#__PURE__*/function (_React$Component4) {
  _inherits(NewItem, _React$Component4);
  var _super4 = _createSuper(NewItem);
  function NewItem(props) {
    var _this2;
    _classCallCheck(this, NewItem);
    _this2 = _super4.call(this, props);
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
var ToDoItem = /*#__PURE__*/function (_React$Component5) {
  _inherits(ToDoItem, _React$Component5);
  var _super5 = _createSuper(ToDoItem);
  function ToDoItem() {
    _classCallCheck(this, ToDoItem);
    return _super5.apply(this, arguments);
  }
  _createClass(ToDoItem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, this.props.item);
    }
  }]);
  return ToDoItem;
}(React.Component);
root.render( /*#__PURE__*/React.createElement(ToDoApp, null));
