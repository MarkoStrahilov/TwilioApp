import Home from './pages/Home';

function App() {

  const account = true;

  return (
    <div className="App">
      {account ? <Home /> : <h1>Hello</h1>}
    </div>
  );
}

export default App;
