import './App.css';
import HeaderContainer from "./Components/HeaderContainer/HeaderContainer";
import NavigationBarContainer from "./Components/NavigationBarContainer/NavigationBarContainer";
import {BrowserRouter, Route} from "react-router-dom";
import MessagesContainer from "./Components/Messages/MessagesContainer/MessagesContainer";

function App() {
    return (
        <BrowserRouter>
            <HeaderContainer/>
            <div className='container'>
                <NavigationBarContainer/>
                <div className="content">
                    <Route path='/messages' render={() => <MessagesContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
