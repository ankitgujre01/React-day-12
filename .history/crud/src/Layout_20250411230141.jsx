import { Outlet } from "react-router-dom";
import TopNav from "./components/TopNav";
import To
const Layout = () => {
  return (
      <>
          <TopNav />
          <Outlet/>
      </>
  )
}

export default Layout;