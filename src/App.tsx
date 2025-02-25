import { PrimaryNavbar } from './components'
import Routing from './Routing'
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
