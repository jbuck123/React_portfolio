

import { Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Header from './component/Header'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect







// look into using buttons instead of anchor tags

// instead of loadin


function App() {
  return (
    <div>


        <Header />
        <Routes>
        <Route path="/React_portfolio" element={<HomePage />}></Route>
        </Routes>

    
    </div>
  )
}

export default App;







