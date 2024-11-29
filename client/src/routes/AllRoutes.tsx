import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Error />} />
    </Routes>
  )
}
