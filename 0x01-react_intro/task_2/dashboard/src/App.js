import logo from "./Holberton-logo.jpg";
import "./App.css";

import {getFooterCopy, getFullYear} from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password"/>
        <button type="submit">OK</button>

      </body>
      <hr />
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(!false)}</p>
      </footer>
    </div>
  );
}

export default App;
