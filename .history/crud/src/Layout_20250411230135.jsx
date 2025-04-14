import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import
const Layout = () => {
  return (
      <>
          <TopNav />
          <Outlet/>
      </>
  )
}

export default Layout;