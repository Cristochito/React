import './Presentacion.css';

function Presentacion({nombre = "Cristopher", apellido= "Falconnat", profesion = "Estudiante"}) {
  return (
    
    <div className="Presentacion">
        <div className="icon">
            <img src={require('./profileuser.png')} alt="Icono" />
        </div>
        <h1 className="tittle">Presentacion</h1>
        <h4>Nombre: {nombre}</h4>
        <h4>Apellido: {apellido}</h4>
        <h4>Profesion: {profesion}</h4>
    </div>
  );
}

export default Presentacion;
