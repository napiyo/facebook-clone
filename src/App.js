import { dividerClasses } from '@mui/material';
import Header from './components/Header';
import HomeFeed from './components/HomeFeed';
import Sidebar from './components/Sidebar';
import LoginSignupPage from './login-signup-page/login-signup-page'
import './App.css';

function App() {
    return ( <div className='Header'>
        <Header />
        <div className='main_body'>
                <div className='SidebarContainer'><Sidebar/></div>
                <div className='HomeFeedContainer'><HomeFeed /></div>
                {/* <div className="1">sidebar</div>
                <div className="2">home feed</div>
                <div className="3">chat box</div> */}

        </div>
        </div>
    );
}

export default App;