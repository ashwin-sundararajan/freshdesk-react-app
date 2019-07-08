var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      contact = _React$useState2[0],
      setContact = _React$useState2[1];

  React.useEffect(function () {
    client.data.get('contact').then(function (data) {
      return setContact(data.contact);
    }).catch(console.log);
  }, []);

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "h1",
      null,
      "Hello React"
    ),
    contact && React.createElement(
      "div",
      { className: "contact-details" },
      React.createElement(
        "h2",
        null,
        "Contact Details"
      ),
      React.createElement(
        "div",
        null,
        "Name: ",
        contact.name
      ),
      React.createElement(
        "div",
        null,
        "Email: ",
        contact.email
      )
    )
  );
}

window.app.initialized().then(function (_client) {
  window.client = _client;

  window.client.events.on('app.activated', function () {
    ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
  });
}).catch(function (error) {
  console.log('Error initializing app', error);
});