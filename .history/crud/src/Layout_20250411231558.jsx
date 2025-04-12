import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import TopBanner from "./components/TopBanner";
const Layout = () => {
  return (
      <>
          <TopNav />
          <TopBanner/>
          <Outlet />
          <Footer
      </>
  )
}

export default Layout;