import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {

  const nav_menu = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <div className="App">
      <Header nav_menu={nav_menu} />
      <Home id={nav_menu[0]} />
      <About id={nav_menu[1]} />
      <Skills id={nav_menu[2]} />
      <Projects id={nav_menu[3]} />
      <Contact id={nav_menu[4]} />
    </div>
  );
}

export default App;
