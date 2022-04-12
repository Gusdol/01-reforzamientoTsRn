

const TiposBasicos = () => {

    const nombre: string  = 'fernado';
    const edad: number = 35;
    const estaActivo: boolean = false;
    // arreglo de string se pone el string y luego el arreglo
    const poderes: string[] = ['velocidad', 'volar', 'respirar en el agua'];
    
    return (
        <>
        <h3>Tipos basicos</h3>
        {nombre} - {edad}, { (estaActivo) ? 'esta activo' : 'no activo'}
        <br />
        {poderes.join(', ')}
        </>
    )
}

export default TiposBasicos;
