import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import App from './App';
import Layout from './components/Purchase/Layout';
import Animation from './components/About/Animation';
import Land from './components/Purchase/Land';
import SingIn from './Authentication/SingIn';
import Register from './Authentication/Register';
import Home from './components/Home/Home';
// import NewsHome from './components/News/NewsHome';


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
         <Route path='/' element={<Home/>}/>
         <Route path='about' element={<Animation/>}/>
         <Route path='contact' element={<Contact/>}/>
         {/* <Route path='/news' element={<NewsHome/>}/> */}
         <Route path='/purchase' element={<Layout/>}>
             <Route path='/purchase' element={<Land/>}/>
             <Route path='/purchase/login' element={<SingIn/>}/>
             <Route path='/purchase/register' element={<Register/>}/>
         </Route>
      </Route>
    )
  )


  export default router;