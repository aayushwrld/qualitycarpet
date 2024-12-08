import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Contact from '../pages/Contact'
import { Pricing } from '../pages/Pricing'
import Review from '../pages/Review'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/review' element={<Review />} />
        <Route path='/*' element={<Error />} />
    </Routes>
  )
}
