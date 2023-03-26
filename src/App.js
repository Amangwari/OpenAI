import "./App.css";
import { Brand, Cta, Navbar} from "./Components";
import { Blog, Footer, Possibility, Features, Header, WhatGPT3 } from "./Containers";

function App() {
  return (
    <>
    <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
