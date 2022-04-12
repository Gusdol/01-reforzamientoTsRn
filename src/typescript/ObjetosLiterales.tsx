
// diferencia type, class, interface
//class sirve para crear instancia
// interfaz no sirve para crear instancias
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}


const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Gustavo',
        edad: 27,
        direccion: {
            pais: 'Paraguay',
            casaNo: 123,
        },
    };

    
    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 )}
                </pre>
            </code>
            
        </>
    )
}

export default ObjetosLiterales
