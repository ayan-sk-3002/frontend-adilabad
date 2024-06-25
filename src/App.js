import React from 'react'
import BottomNav from './Components/BottomNav/BottomNav'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Category from './Pages/Category/Category'
import CategoryDetail from './Pages/CategoryDetail/CategoryDetail'
import SubCategory from './Pages/SubCategory/SubCategory'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Category/>} />
      <Route path={'/category-detail'} element={<CategoryDetail/>} />
      <Route path={'/sub-category'} element={<SubCategory/>} />

      </Routes>
      
      <BottomNav/>
      </BrowserRouter>
    </div>
  )
}

export default App