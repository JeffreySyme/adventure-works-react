import Routing from './Routing'
import PrimaryNavbar from './components/PrimaryNavbar'
import useApp from './use-app'

export default function App() {
  useApp()

  return (
    <>
      <PrimaryNavbar />
      <Routing />
    </>
  )
}
