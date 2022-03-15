const App = () => {
    const miObjeto ={
        nombre: "Nancy",
        apPaterno: "Farias",
        apMaterno: "Fernandez",
        edad: "22",
    };

    const atributo = "apPaterno";

return (
<div className="App">
    <h1>{`Mi nombrre es${miObjeto.nombre} ${miObjeto.apPaterno} ${miObjeto.apMaterno} y tengo tan solo ${miObjeto.edad} años`}</h1>
</div>
<h1>
    {"Mi Nombre es" + miObjeto.nombre + " "+miObjeto.apPaterno+" "+miObjeto.apMaterno+"y tengo"}
</h1>

);
};


export default App;
