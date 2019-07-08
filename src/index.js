function App() {
  const [contact, setContact] = React.useState(null);

  React.useEffect(() => {
    client.data
      .get('contact')
      .then(data => setContact(data.contact))
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <h1>Hello React</h1>
      {contact && (
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div>Name: {contact.name}</div>
          <div>Email: {contact.email}</div>
        </div>
      )}
    </div>
  );
}

window.app
  .initialized()
  .then(function(_client) {
    window.client = _client;

    window.client.events.on('app.activated', function() {
      ReactDOM.render(<App />, document.getElementById('root'));
    });
  })
  .catch(function(error) {
    console.log('Error initializing app', error);
  });
