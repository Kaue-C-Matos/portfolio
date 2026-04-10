import { Element, Link } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> <i class="fa-solid fa-code"></i> Kauê da Costa Matos</h1>
        <nav>
          <Link to='sobre mim' smooth={true} offset={-120}>Sobre mim</Link>
          <Link to='skills' smooth={true} offset={-120}>Skills</Link>
          <Link to='hobbies' smooth={true} offset={-120}>Hobbies</Link>
          <Link to='formacao' smooth={true} offset={-120}>Formação</Link>
          <Link to='projetos' smooth={true} offset={-120}>Projetos</Link>
        </nav>
      </header>
      <main>
        <Element name='sobre mim'>
          <h1>Sobre mim</h1>
          <div id='apresentacao'>
            <div>
              <h2 id='tag'>Front end</h2>
              <p>Olá! Sou apaixonado por programação e tecnologia em geral, além disso, tenho muita facilidade em 
                aprender e trabalhar em equipe. Hoje em dia possuo grande conhecimento na área de Front end,
                e espero conseguir minha primeira oportunidade nesse mercado.</p>
              <nav>
                <a href='https://github.com/Kaue-C-Matos'><i class="fa-brands fa-github"></i> Github</a>
                <a href='https://instagram.com/kauecm8'><i class="fa-brands fa-instagram"></i> Instagram</a>
                <a href='https://www.linkedin.com/in/kaue-da-costa-matos-770140275/'><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                <a href='Currículo Kauê.pdf'><i class="fa-solid fa-file"></i> Currículo</a>
              </nav>
            </div>
            <img src='perfil.jpg' alt='Foto de perfil'/>
          </div>
        </Element>

        <Element name='skills'>
          <h1>Skills</h1>
          <div className='listagem'>
            <span><i class="fa-brands fa-js" style={{color: '#F7E018'}}></i><br></br>Javascript</span>
            <span><i class="fa-brands fa-html5" style={{color: '#E54C21'}}></i><br></br>HTML5</span>
            <span><i class="fa-brands fa-css" style={{color: '#66309A'}}></i><br></br>CSS3</span>
            <span><i class="fa-brands fa-react" style={{color: '#61DBFB'}}></i><br></br>ReactJs</span>
            <span><i class="fa-solid fa-database" style={{color: '#E3752C'}}></i><br></br>MySQL</span>
            <span><i class="fa-solid fa-chart-line" style={{color: '#1ff718'}}></i><br></br>Metodologias ágeis</span>
            <span><i class="fa-solid fa-handshake" style={{color: '#d4bf00'}}></i><br></br>Trabalho em equipe</span>
            <span><i class="fa-solid fa-book-open-reader" style={{color: '#1d8ae4'}}></i><br></br>Facilidade em aprendizado</span>
          </div>
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
