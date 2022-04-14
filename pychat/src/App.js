// import { render } from "react-dom";
import styled from "styled-components"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Home from "./home";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";

const App=()=>(

  <div className="App">
  <BrowserRouter>
   <Header/>
   <AppBody>
   <Sidebar/>
    <Routes>
      <Route path="/" exact >
        {/* chat */}
      </Route>
    </Routes>
   </AppBody>
   
  </BrowserRouter>
  </div>
);
export default App;

const AppBody=styled.div`
display: flex;
height: 100vh;

`









// // import { render } from "react-dom";
// import styled from "styled-components"
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// // import Home from "./home";
// import Header from "./components/Header"

// const App=()=>(

//   <div className="App">
//   <BrowserRouter>
//    <Header/>
//    <AppBody>
//    <Routes>
//       <Route path="/" exact element={<Header />} />
//     </Routes>
//    </AppBody>
   
//   </BrowserRouter>
//   </div>
// );
// export default App;

// const AppBody=styled.div``