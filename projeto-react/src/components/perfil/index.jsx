import './perfil.css'

const Perfil = ({ endereco, nome }) => {
    const {endereco, nome} = props
    return (
        <div>
            <img className='perfil-avatar' src={props.endereco}/>
            <h3 className='pertfil-titulo'>{props.nome}</h3>
        </div>
    )
}

export default Perfil;