import { Element, Link } from 'react-scroll';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Projeto from './components/Projeto/Projeto';
import { useState } from 'react';
import emailjs from "@emailjs/browser"

function App() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [assunto, setAssunto] = useState("")
  const [mensagem, setMensagem] = useState("")

  function enviarEmail(e){
    e.preventDefault();

    if(nome === "" || email === "" || assunto === "" || mensagem === ""){
      alert("Por favor, preencha todos os campos")
      return;
    }

    const emailParams = {
      name: nome,
      email: email,
      title: assunto,
      message: mensagem
    }

    emailjs.send("service_w9k8u1c", "template_tarho7a", emailParams, "2iZ_RLZqbnzC1rINi")
    .then((response)=>{
      console.log("Email enviado", response.status, response.text)
      alert("Email enviado com sucesso!")
      setNome("")
      setEmail("")
      setAssunto("")
      setMensagem("")
    }, (error) =>{
      console.log("Erro: ", error)
    })
  }
  
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
          <Link to='contato' smooth={true} offset={-120}>Contato</Link>
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
            <span><i class="fa-brands fa-angular" style={{color: '#C50032'}}></i><br></br>Angular</span>
            <span><i class="fa-solid fa-database" style={{color: '#E3752C'}}></i><br></br>MySQL</span>
            <span><i class="fa-solid fa-chart-line" style={{color: '#1ff718'}}></i><br></br>Metodologias ágeis</span>
            <span><i class="fa-solid fa-handshake" style={{color: '#d4bf00'}}></i><br></br>Trabalho em equipe</span>
            <span><i class="fa-solid fa-book-open-reader" style={{color: '#1d8ae4'}}></i><br></br>Facilidade em aprendizado</span>
          </div>
        </Element>

        <Element name='hobbies'>
          <h1>Hobbies</h1>
          <div className='listagem'>
            <span><i class="fa-solid fa-gamepad" style={{color: '#bb08e7'}}></i><br></br>Videogames</span>
            <span><i class="fa-solid fa-tv"></i><br></br>Filmes/séries</span>
            <span><i class="fa-solid fa-dice-d20" style={{color: '#ff0000'}}></i><br></br>RPG</span>
            <span><i class="fa-solid fa-person-walking"></i><br></br>Caminhada</span>
            <span><i class="fa-solid fa-volleyball" style={{color: '#ffef16'}}></i><br></br>Vôlei</span>
            <span><i class="fa-solid fa-book" style={{color: '#0c5ef7'}}></i><br></br>Leitura</span>
          </div>
        </Element>

        <Element name='formacao'>
          <h1>Formação</h1>
          <div className='listagem'>
            <span><img src='Integrado.png' alt='Logo Integrado'/><br></br><h3>Centro Universitário Integrado</h3><br></br>Bacharelado em Tecnologia em Análise e Desenvolvimento de Sistemas <br></br><br></br> 2022 - 2024</span>
            <span><img src='logo-One.png' alt='Logo ONE'/><br></br><h3>Oracle Next Education</h3><br></br>Curso de Especialização em Front end<br></br><br></br> 2024</span>
            <span><img src='UNOPAR.jpg' alt='Logo UNOPAR'/><br></br><h3>UNOPAR</h3><br></br>Pós graduação em Front end<br></br><br></br> 2025 - em andamento</span>
          </div>
        </Element>

        <Element id='projetos'>
          <h1>Projetos</h1>
            <Swiper
            modules={[Navigation]}
            navigation
            direction='horizontal'
            loop={true}
            >
              <SwiperSlide>
                <Projeto 
                  projeto={'Aluraflix'}
                  descricao={'Projeto criado como parte do programa ONE, ele demonstra como apresentar e inserir novos dados em uma API utilizando REACT'}
                  rep={'https://github.com/Kaue-C-Matos/challenge-aluraflix'}
                  dep={'https://challenge-aluraflix-eight.vercel.app'}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Projeto 
                  projeto={'Pokedex'}
                  descricao={'Um clássico! Demonstra mais de meu conhecimento com react e com consumo de APIs existentes'}
                  rep={'https://github.com/Kaue-C-Matos/pokedex'}
                  dep={'https://pokedex-liart-chi.vercel.app'}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Projeto 
                  projeto={"Decodificador de texto"}
                  descricao={'Demonstra como utilizar Javascript para manipular e controlar elementos do site'}
                  rep={'https://github.com/Kaue-C-Matos/challenge-ONE-decodificador'}
                  dep={'https://kaue-c-matos.github.io/challenge-ONE-decodificador/'}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Projeto 
                  projeto={'Alurageek'}
                  descricao={'Este projeto demonstra o uso de um CRUD em um projeto em tempo real com servidor próprio'}
                  rep={'https://github.com/Kaue-C-Matos/Challenge---alurageek'}
                  dep={'https://kaue-c-matos.github.io/Challenge---alurageek/'}
                />
              </SwiperSlide>
            </Swiper>
        </Element>
        <Element id='contato'>
          <h1>Entre em contato</h1>
          <div id='contato_container'>
            <img src='telefone.jpg' alt='Telefone'/>
            <form id='contato_form' onSubmit={enviarEmail}>
              <div>
                <label htmlFor='nome'><b>Nome:</b><br></br></label>
                <input 
                  id='nome' 
                  className='contato_campo' 
                  type='text' 
                  required
                  value={nome}
                  onChange={(e)=>{setNome(e.target.value)}}/> 
              </div>
              <div>
                <label htmlFor='email'><b>E-mail:</b><br></br></label>
                <input 
                  id='email' 
                  className='contato_campo' 
                  type='email' 
                  required
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}/> 
              </div>
              <div>
                <label htmlFor='assunto'><b>Assunto:</b><br></br></label>
                <input 
                  id='assunto' 
                  className='contato_campo' 
                  type='text' 
                  required
                  value={assunto}
                  onChange={(e)=>{setAssunto(e.target.value)}}/> 
              </div>
              <div>
                <label htmlFor='mensagem'><b>Mensagem:</b><br></br></label>
                <textarea 
                  id='mensagem' 
                  className='contato_campo' 
                  required
                  value={mensagem}
                  onChange={(e)=>{setMensagem(e.target.value)}}></textarea> 
              </div>
              <button type='submit' id='contato_botao'>Enviar</button>
            </form>
          </div>
        </Element>
      </main>

      <footer>
        Desenvolvido por Kauê da Costa Matos - 2026
      </footer>
    </div>
  );
}

export default App;
