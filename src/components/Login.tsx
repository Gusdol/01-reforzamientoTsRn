import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};
type LoginPayload = {
  username: string;
  nombre: string;
};
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };

    case "login":
      const { nombre, username } = action.payload;
      return {
        //se puede usar el spread operator ...state
        // nombre: action.payload.nombre,
        // username: action.payload.username
        // se puede usar como lo de arriba o desestructurando
        validando: false,
        token: "abc",
        nombre,
        username,
      };

    default:
      return state;
  }
};

const Login = () => {
  // const [state, dispatch] = useReducer(authReducer, initialState);
  // se puede destructurar el state tambien en el reducer
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

 const login = () => {
     dispatch({type: 'login', payload: {nombre: 'Gus', username: 'gudo'}})
 }
 const logout = () => {
    dispatch({type: 'logout'})
}
  if (validando) {
    return (
      <>
        <h3>Login</h3>

        <div className="alert alert-info">validando...</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success"> autenticado como: {nombre}</div>
      ) : (
        <div className="alert alert-danger"> no autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      ) : (
        <button className="btn btn-primary" onClick={login}>Login</button>
      )}
    </>
  );
};

export default Login;
