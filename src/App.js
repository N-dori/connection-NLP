import { Route, HashRouter as Router,Routes, } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import './assets/scss/main.scss';

import { Home } from './views/Home';
import { SignupPage } from './views/SignupPage';
import { CouresDetails } from './views/CouresDetails';
import { PurchaseCourse } from './views/PurchaseCourse';
import { MyCoursesIndex } from './views/MyCoursesIndex';
import { CourseWatchIndex } from './views/CourseWatchIndex';
import { ShoppingCart } from './views/ShoppingCart';
import { LoginPage } from './views/LoginPage';
import { MyCourse } from './views/MyCourse';
import { CourseOverview } from './cmps/CourseOverview';
import { SearchContent } from './cmps/SearchContent';
import { CourseReviews } from './cmps/CourseReviews';
import { CourseAnnouncements } from './cmps/CourseAnnouncements';
import { DashBoard } from './views/DashBoard';
import { About } from './views/About';
import { AppFooter } from './cmps/AppFooter';

export function  App () {
// load data from store : loggedin user ,courses ,reviews
    return (
      
      <Router>
           <section className="main-layout">
            {/* Appheader : 
            porps : loggedin user ,
            content: 
            if loggedin user is null : show logo , links to componentets: About, ShoppingCart , login , signup, about
            if loggedin user !== null : show logo, links to componentets: About, ,ShoppingCart, user-img 
            if loggedinuser && paid for courses : show logo, links to componentets: ,ShoppingCart, MyCourses, user-img */}
           <AppHeader  />
   
      <Routes>
        {/* Home view : 
        props: loggedinUser , courses 
        componentes : Carousel(loggedinUser?) CoursesIndex(courses) , GeneralRecomendations
        content: carousel with  hi username? nice pics and quotes , texts, list of courses , list of recomendations 

        */}
        <Route path="/" element={<Home/>} />
        {/*SignupPage :
            data : ask userService for empty user 
            lib: react-oauth/google
            content: form - username email password {}
            actions : onSignup save new user  and login to backend 
        */}
      <Route path="/signup" element={<SignupPage/>} />
      {/*  LoginPage : 
          data : get from cookie user name 
          lib: react-oauth/google
          content: form - password
          /or
          action : onLogin check if password is correct
      */}
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/about" element={<About/>} />
      {/*   CouresDetails :
           params: courseId 
           data: course, reviews- ask reviewService for reviews by courseId
           actions : loadCourseById
           content : show modal with course trailer , list of course content (disabled) , description title , sub title , show reviews
           components: WhatYouWillLearn ,CourseContentIndex , CourseReviews , BuyCourseModal
      */}
      <Route path="/course/:id" element={<CouresDetails/>} />
      {/* 
            ShoppingCart:
            ask local function for course by Id 
            data : shopping cart
            action : load shopping cart 
            content : course img , title, total price, remove , checkout btn- to payment 
           components : ProductList  |  ProductPreview
       */}
      <Route path="/shopping-cart/" element={<ShoppingCart/>} />
       {/* 
             PurchaseCourse :
        extrenal code from payment company
       
       */}
      <Route path="/purchase-course/:id" element={<PurchaseCourse/>} />
        {/* 
            MyCoursesIndex : 
            props: courses , loggedinUser
           data: courses from props
           content : show list of purchesed courses by user
           components: MyCoursesList(courses)
        */}
      <Route path="/my-courses" element={<MyCoursesIndex/>} />
        {/* 
            MyCourse :
            params: courseId 
           data:  course , couresReviews
           actions : loadCourseById, loadReviewByCouresId
           content : show video player with course trailer/first lesson ,
            list of course content (not disabled) , nav bar  with links , output of children
           components: CourseContentIndex , CourseOverview, SearchContent, CourseReviews ,CourseAnnouncements

        */}
      <Route path="/my-course" element={<MyCourse/>} >
        <Route path='/my-course/course-overiew' element={<CourseOverview/>}/>
        <Route path='/my-course/serach-content' element={<SearchContent/>}/>
        <Route path='/my-course/reviews' element={<CourseReviews/>}/>
        <Route path='/my-course/announcements' element={<CourseAnnouncements/>}/>
      </Route>
          {/* 
              Dashboard : 
           data:  users 
           actions : loadUsers, addUser ,editUser , removeUser , 
           content :  list of users , actions buttons , 
           
           components: DashboardUserCourses(user.courses)
          */}
      <Route path="/dash-board" element={<DashBoard/>}/>



      <Route path="/course-watch/:id" element={<CourseWatchIndex/>} />
      </Routes>
    <AppFooter/> 

     
    </section>
      </Router>
   
    )
  }

