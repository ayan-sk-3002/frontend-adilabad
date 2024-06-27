import React from 'react'
import BottomNav from './Components/BottomNav/BottomNav'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Category from './Pages/Category/Category'
import CategoryDetail from './Pages/CategoryDetail/CategoryDetail'
import SubCategory from './Pages/SubCategory/SubCategory'
import StoreDetail from './Pages/StoreDetail/StoreDetail'
import Profile from './Pages/Profile/Profile'
import Notification from './Pages/Notification/Notification'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Category/>} />
      <Route path={'/category-detail'} element={<CategoryDetail/>} />
      <Route path={'/sub-category'} element={<SubCategory/>} />
      <Route path={'/store-detail/:id'} element={<StoreDetail/>} />
      <Route path={'/profile'} element={<Profile/>} />
      <Route path={'/notification'} element={<Notification/>} />

      </Routes>
      
      <BottomNav/>
      </BrowserRouter>
    </div>
  )
}

export default App