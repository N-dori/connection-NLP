import { Route, HashRouter as Router, Routes, } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import './assets/scss/main.scss';

import { Home } from './views/Home';
import { SignupPage } from './views/SignupPage';
import { CouresDetails } from './views/CouresDetails';
import { PaymentPage } from './views/PaymentPage';
import { MyCoursesIndex } from './views/MyCoursesIndex';
import { ShoppingCart } from './views/ShoppingCart';
import { LoginPage } from './views/LoginPage';
import { MyCourse, MyLearning } from './views/MyLearning';
import { CourseOverview } from './cmps/CourseOverview';
import { SearchContent } from './cmps/SearchContent';
import { CourseReviews } from './cmps/CourseReviews';
import { CourseAnnouncements } from './cmps/CourseAnnouncements';
import { DashBoard } from './views/DashBoard';
import { About } from './views/About';
import { AppFooter } from './cmps/AppFooter';
import { useEffect, useState } from 'react';
import { loadCart } from './store/actions/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { CourseQ } from './cmps/CourseQ';
import { setFilterBy } from './store/actions/course.actions';
import { courseService } from './services/course.service';
import { loadAnnouncements } from './store/actions/announcement.actions';
import { loadReviews } from './store/actions/review.actions';
import {WhatToolsYouGet} from './views/WhatToolsYouGet';
import { NlpBenefits } from './views/NlpBenefits';
import { WhoAreWe } from './views/WhoAreWe';
import { Memorial } from './cmps/Memorial';
import CoursesIndex  from './cmps/CoursesIndex';

export function App() {
  // load data from store : loggedin user ,courses ,reviews
  const shoppingCart = useSelector((storeState) => storeState.cartModule.shoppingCart)
  const filterBy = useSelector((storeState) => storeState.couresModule.filterBy)
  const loggdingUser = useSelector((storeState) => storeState.userModule.loggdingUser)

  const dispatch = useDispatch()
  const [len, setLen] = useState('')
  const [currCourseId, setCurrCourseId] = useState('')
  const [content, setContent] = useState('')
  const [videoUrl, setVideoUrl] = useState(false)
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    dispatch(loadCart())
    dispatch(loadAnnouncements())
    dispatch(loadReviews())
  }, [])

  //gtting length of shopping cart
  useEffect(() => {
    getCartLen()
  }, [shoppingCart])
  const getCartLen = () => {
    if (shoppingCart) {
      const len = shoppingCart.length
      setLen(len)
    }
  }

  const onChangeFilter = (filterBy) => {
    dispatch(setFilterBy(filterBy))
     getContent(filterBy) 
  
}
 const getContent = async (filterBy) => {
  const content = await courseService.getCourseContent(currCourseId,filterBy)
  console.log('content',content);
  setContent(content)
  }

  return (

    <Router >
      <section className="main-layout">
        {/* Appheader : 
            porps : loggedin user ,
            content: 
            if loggedin user is null : show logo , links to componentets: About, ShoppingCart , login , signup, about
            if loggedin user !== null : show logo, links to componentets: About, ,ShoppingCart, user-img 
            if loggedinuser && paid for courses : show logo, links to componentets: ,ShoppingCart, MyCourses, user-img */}
        <AppHeader setIsActive={setIsActive}isActive={isActive}  isMobileMenu={isMobileMenu}
          setIsMobileMenu={setIsMobileMenu} len={len} />

        <Routes>
          {/* Home view : 
        props: loggedinUser , courses 
        componentes : Carousel(loggedinUser?) CoursesIndex(courses) , GeneralRecomendations
        content: carousel with  hi username? nice pics and quotes , texts, list of courses , list of recomendations 

        */}
          <Route path="/" element={<Home  setIsActive={setIsActive}isActive={isActive}
          isMobileMenu={isMobileMenu}
          setIsMobileMenu={setIsMobileMenu}/>} >
              <Route path='/our-courses' element={<CoursesIndex />} />
              <Route path='/who-are-we' element={<WhoAreWe />} />
             <Route path='/benefits' element={<NlpBenefits />} />
             <Route path='/nlp-tools' element={<WhatToolsYouGet />} />
             <Route path='/memorial' element={<Memorial />} />

          </Route>
      
          <Route path="/signup" element={<SignupPage />} />
          {/*  LoginPage : 
          data : get from cookie user name 
          lib: react-oauth/google
          content: form - password
          /or
          action : onLogin check if password is correct
      */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          {/*   CouresDetails :
           params: courseId 
           data: course, reviews- ask reviewService for reviews by courseId
           actions : loadCourseById
           content : show modal with course trailer , list of course content (disabled) , description title , sub title , show reviews
           components: WhatYouWillLearn ,CourseContentIndex , CourseReviews , BuyCourseModal
      */}
          <Route path="/course/:id"  element={<CouresDetails />} />
          {/* 
            ShoppingCart:
            ask local function for course according to IdCourses in user cart  
            data : shopping cart
            action : load shopping cart 
            content : course img , title, total price, remove , checkout btn- to payment 
           components : ProductList  |  ProductPreview
       */}
          <Route path="/shopping-cart/" element={<ShoppingCart />} />
          {/* 
             PurchaseCourse :
        extrenal code from payment company
       
       */}
          <Route path="/payment/:id" element={<PaymentPage />} />
          {/* 
            MyCoursesIndex : 
            props: courses , loggedinUser
           data: courses from props
           content : show list of purchesed courses by user
           components: MyCoursesList(courses)
        */}
          <Route path="/my-courses" element={<MyCoursesIndex />} />
          {/* 
            MyCourse :
            params: courseId 
           data:  course , couresReviews
           actions : loadCourseById, loadReviewByCouresId
           content : show video player with course trailer/first lesson ,
            list of course content (not disabled) , nav bar  with links , output of children
           components: CourseContentIndex , CourseOverview, SearchContent, CourseReviews ,CourseAnnouncements

        */}
          <Route path="/my-learning/:id" element={<MyLearning  setVideoUrl={setVideoUrl} videoUrl={videoUrl} setCurrCourseId={setCurrCourseId} currCourseId={currCourseId}/>} >
            <Route path='/my-learning/:id/course-overiew' element={<CourseOverview />} />
            <Route path='/my-learning/:id/serach-content' element={<SearchContent setVideoUrl={setVideoUrl} content={content}  onChangeFilter={onChangeFilter} filterBy={filterBy} />} />
            <Route path='/my-learning/:id/reviews' element={<CourseReviews />} />
            <Route path='/my-learning/:id/announcements' element={<CourseAnnouncements currCourseId={currCourseId}/>} />
            <Route path='/my-learning/:id/Q&A' element={<CourseQ />} />
          </Route>
          {/* 
              Dashboard : 
           data:  users 
           actions : loadUsers, addUser ,editUser , removeUser , 
           content :  list of users , actions buttons , 
           
           components: DashboardUserCourses(user.courses)
          */}
          <Route path="/dash-board" element={<DashBoard />} />


        </Routes>
        <AppFooter />


      </section>
    </Router>

  )
}

