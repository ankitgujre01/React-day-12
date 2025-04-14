import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;