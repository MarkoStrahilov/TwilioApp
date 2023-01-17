import Home from './pages/Home';
import SendMessages from './components/SendMessages';

function App() {

  const account = true;

  return (
    <div className="App">
      {account ? <Home /> : <SendMessages />}
    </div>
  );
}

export default App;
