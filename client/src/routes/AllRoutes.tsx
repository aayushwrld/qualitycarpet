import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Contact from '../pages/Contact'
import { Pricing } from '../pages/Pricing'
import Review from '../pages/Review'
import Admin from '../pages/Admin'
import Reviews from '../pages/Reviews'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/review' element={<Review />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/*' element={<Error />} />
    </Routes>
  )
}
