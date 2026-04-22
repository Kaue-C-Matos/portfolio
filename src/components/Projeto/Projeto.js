import "./Projeto.css"

function Projeto({projeto, descricao, rep, dep}){
    
    return(
        <div className='slide-content'>
            <img src={`${projeto}.png`} alt={`Print do projeto ${projeto}`} width={575}/>
            <div>
            <h3>{projeto}</h3>
            <p>{descricao}</p>
            <p><b>Repositório:</b> <a href={rep}>{rep}</a></p>
            <p><b>Deploy:</b> <a href={dep}>{dep}</a></p>
            </div>
        </div>
    )
}

export default Projeto