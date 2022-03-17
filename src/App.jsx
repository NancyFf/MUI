const App = () =>{
    const persona = {
        nombre: "Nancy",
        apellido: "Farias",
        edad: "22",
        direccion: {
            calle: "Avenida Siempre viva",
            numExt: 742,
            numInt: "",
            ciudad: "Springfield",
        },
    };

const contactoPersona = {
    telefono: "5549596991",
    email: "isc18350306@gmail.com",
    web: "www.thesimpsons.com",
};

const infoPersona ={ ...persona, ...contactoPersona, empresa: "Disney" };
infoPersona.apodo ="Bart";

infoPersona.telefono ="5555 55 55";

console.table(infoPersona);

const { edad, nombre, apellido } = persona;
const{ calle, numExt, ciudad } = persona.direccion;
const humanos = ["Homer", "Margorie", "Lisa", "Maggie"];
const [padre, madre, hermana1, hermana2] = familia;
const mascotas = ["Santa's helper", "Snoe ball"];

const familia ["...humanos, ...mascotas, "Milhuse"];

return (
<div className="App">
    {/*EcmaScript 6*/}
    <h1>{`Mi nombrre es ${nombre} ${apellido} y tengo tan solo ${edad} años y vivo en ${calle} numero ${numExt}, ${ciudad}`}</h1>

<br />
{"Mi familia la conforman:"}
<ul>
    <li>{`Mi padre: ${padre}`}</li>
    <li>{`Mi madre: ${madre}`}</li>
    <li>{`Mis hermanas: ${hermana1} y ${hermana2}`}</li>
</ul>
</div>


);
};


export default App;
