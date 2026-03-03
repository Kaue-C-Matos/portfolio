import { Element, Link } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Kauê da Costa Matos</h1>
        <nav>
          <Link to='sobre mim' smooth={true} offset={-120}>Sobre mim</Link>
          <Link to='skills' smooth={true} offset={-120}>Skills</Link>
          <Link to='hobbies' smooth={true} offset={-120}>Hobbies</Link>
          <Link to='formacao' smooth={true} offset={-120}>Formação</Link>
          <Link to='projetos' smooth={true} offset={-120}>Projetos</Link>
        </nav>
      </header>
      <main>
        <Element name='sobre mim' id='sobremim'>
          <h1>Sobre mim</h1>
        </Element>

        <Element name='skills'>
          <h1>Skills</h1>
        </Element>

        <Element name='hobbies'>
          <h1>Hobbies</h1>
        </Element>

        <Element name='formacao'>
          <h1>Formação</h1>
        </Element>

        <Element id='projetos'>
          <h1>Projetos</h1>
        </Element>
      </main>
    </div>
  );
}

export default App;
