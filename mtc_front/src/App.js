import "./App.css";
import AddFiles from "./components/AddFiles";
import ListFiles from "./components/ListFiles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import socketIO from 'socket.io-client';
import HomeChat from "./components/Homechat"
import ChatPage from "./components/ChatPage";
import ChatBar from "./components/ChatBar";
import ChatBody from "./components/ChatBody";
import ChatFooter from "./components/ChatFooter";
import Navbar from "./components/NavBar/Navbar";

const socket = socketIO.connect('http://localhost:4000');


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/HomeChat" element={<HomeChat socket={socket}/>}></Route>
          <Route path="/ChatPage" element={<ChatPage socket={socket}/>}></Route>
          <Route path="SignIn" element={<SignIn/>}/>
          <Route path="SignUp" element={<SignUp/>}/>
          <Route path="/" element={<SignUp/>}/>
          <Route path="ListFiles" element={<ListFiles/>}/>
          <Route path="ChatPage" element={<ChatPage/>}/>
          <Route path="ChatBar" element={<ChatBar/>}/>
          <Route path="ChatBody" element={<ChatBody/>}/>
          <Route path="ChatFooter" element={<ChatFooter/>}/>
          <Route path="side" element={<Navbar/>}/>
          <Route path="AddFiles" element={<AddFiles/>}/>
        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
//package 1: npm install pdfjs-dist@2.15.349
//package 2: npm install @react-pdf-viewer/core@3.7.0
//package 3: npm i @react-pdf-viewer/default-layout
//package 4: npm i react-router-dom
//package 5: npm install bootstrap@5.3.0-alpha1
//package 6: npm install axios
//package 7: npm install react-icons
