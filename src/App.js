import logo from './logo.svg';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const contextClass = {
  success: "bg-blue-500",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

function App() {
 const notify = () => toast("Wow so easy !", { type: "success", progressStyle: { background: '#E8DFD0' } });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-5 text-base" onClick={notify}>Notify !</button>
          <ToastContainer
            toastClassName={(context) =>
              contextClass[context?.type || "default"] +
              " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            }
            bodyClassName={() => "text-sm font-white font-med block p-3"}
            position="top-left"
            autoClose={3000}
            icon={({ type }) => {
                if (type === "success") return "👻";
                if (type === "error") return "🚨";
                else return "ℹ️";
            }}
          />
      </header>
    </div>
  );
}

export default App;
