import { Route, Routes } from 'react-router'
import './App.css'
import Home from './home/Page'

export default function App() {
  return (
    <>
      <div>Hello world</div>
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
    </>
  )
}