import './App.css';
import UserContext, { UserProvider } from './userContext'
import MainPage from './MainPage';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import auth from './firebaseConfiguration';
import { useContext } from 'react';


function App() {
  
  //check for logged in user
//   const  userObject = useContext(UserProvider)
//   onAuthStateChanged(auth, (user) => {
//         if (user) {
//           userObject.changeUser(user);
//           console.log(user);
//           // ...
//         }
//         else{
//             console.log('something wrong');
//         }
//       });
  
  
  return <> 
  
   <UserContext>
       <MainPage />
   </UserContext>
  
</>
    }

export default App;