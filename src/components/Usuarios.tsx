import { useUsuarios } from "../hooks/useUsuarios";
import { Usuario } from "../interfaces/reqRes";


const Usuarios = () => {
 
    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios()
  // se puede destrucutar desde el usuario
  // const renderItem = (usuario: Usuario) => {
  const renderItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: 100 }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        siguientes
      </button>
    </>
  );
};

export default Usuarios;
