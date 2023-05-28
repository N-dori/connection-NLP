import { Route, HashRouter as Router,Routes, } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import './assets/scss/main.scss';

// import { AppFooter } from './components/AppFooter';
import { Home } from './views/Home';
// import { About } from './pages/About';
import { SignupPage } from './views/SignupPage';
import { CouresDetails } from './views/CouresDetails';
import { PurchaseCourse } from './views/PurchaseCourse';
import { MyCourses } from './views/MyCourses';

export function  App () {

    return (
      
      <Router>
           <section className="main-layout">
           <AppHeader  />
   
      <Routes>
        <Route path="/" element={<Home/>} />
      <Route path="/signup-page" element={<SignupPage/>} />
      <Route path="/courses/:id" element={<CouresDetails/>} />
      <Route path="/purchase-course/:id" element={<PurchaseCourse/>} />
      <Route path="/my-courses" element={<MyCourses/>} />

        {/* <Route path="/about" element={<About/>} >
                  <Route path="/about/team" element={<Team/>} />
                  <Route path="/about/vision" element={<Vision/>} />
        </Route> */}
       

      </Routes>

          {/* <AppFooter/> */}
    </section>
      </Router>
   
    )
  }

