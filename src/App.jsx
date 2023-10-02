import { About, Main, Projects, Sidenav, Skils, Footer } from "./components";
import Translation from "./components/Translation";

function App() {
  return (
    <div className="bg-slate-300">
      <Translation />
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
