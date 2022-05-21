

function App() {





  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD SIMPLE</h1>
      <hr />
      {/* sistema de filas */}
      <div className="row">
        {/* TOTAL DE COLUMNAS 12 */}
        {/* columna de 8 espacios */}
        <div className="col-8">
          <h4 className="text-center">
            LISTA DE TAREAS
          </h4>
          {/* UNA LISTA */}
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nombre de la tarea</span>
              <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
              <button className="btn btn-warning btn-sm float-right">Editar</button>
            </li>
          </ul>
        </div>
        {/* columna de 4 espacios */}
        <div className="col-4">
          <h4 className="text-center">
            FORMULARIO
          </h4>
          {/* Hago el formulario */}
          <form>
            {/* input.form-control.mb-2 */}
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese Tarea" />
            {/* button.btn.btn-dark.btn-block */}
            <button
              className="btn btn-dark btn-block"
              // para que funcione con la tecla enter
              type="submit">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
