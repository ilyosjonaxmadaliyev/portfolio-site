import { About, Main, Projects, Sidenav, Skils, Footer } from "./components";

function App() {
  return (
    <div className="bg-slate-300">
      <Sidenav />
      <Main />
      <About />
      <Skils />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
