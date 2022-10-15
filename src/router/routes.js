import { Route, Routes  } from "react-router-dom";
import About from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
const CreateRoutes = () => ( 
 <Routes > 
  <Route exact path='/' element={<HomePage/>} />
  <Route path='/about' element={<About/>} />
 </Routes>
)
export default CreateRoutes;