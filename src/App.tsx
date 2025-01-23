import { PrimaryNavbar, SecondaryNavbar } from './components'
import Routing from './Routing'
import useApp from './use-app'

export default function () {
  const { breadcrumbs } = useApp()

  return (
    <>
      <PrimaryNavbar />
      <SecondaryNavbar breadcrumbs={breadcrumbs} />
      <Routing />
    </>
  )
}
