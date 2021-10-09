import './App.css';
import UserContext from './userContext'
import MainPage from './MainPage';

function App() {
   return <> 
  
   <UserContext>
       <MainPage />
   </UserContext>

</>
    }

export default App;