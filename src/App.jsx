import { nanoid } from "nanoid";
import { useState } from "react";


function App() {

  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])


  // funcion de flecha, recibo un evento
  const agregarTarea = (e) => {
    // evita que se procese el formulario
    e.preventDefault()

    // valido que tenga algun texto
    if (!tarea.trim()) {
      console.log('Campo vacio')
      // para que se salga
      return
    }
    console.log(tarea)

    // agregamos todas las tarea
    setTareas(
      // porque es un array
      [
        // uso el operador de propagacion para hacer una copia del array
        ...tareas,
        // nanoid() ---> nanoid() nos genera un id aleatorio
        { id: nanoid(), nombreTarea: tarea }
      ]
    )

    // limpia el input
    setTarea('')
  }

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
            {/* voy a recorrer mi array de tareas para poder pintarlo */}
            {
              tareas.map((item, index) => (
                <li
                  className="list-group-item"
                  // coloco el key de mi tarea
                  key={item.id}
                >
                  <span className="lead"><b>ID:</b> {item.id}<br /></span>
                  <span className="lead"><b>DESCRIPCION DE LA TAREA:</b> {item.nombreTarea}<br /></span>
                  <button className="btn btn-danger btn-sm float-right mx-2">ELIMINAR</button>
                  <button className="btn btn-warning btn-sm float-right">EDITAR</button>
                </li>
              ))
            }
          </ul>
        </div>
        {/* columna de 4 espacios */}
        <div className="col-4">
          <h4 className="text-center">
            FORMULARIO
          </h4>
          {/* Hago el formulario */}
          <form onSubmit={agregarTarea}>
            {/* input.form-control.mb-2 */}
            <input
              // el tipo
              type="text"
              // clase
              className="form-control mb-2"
              // que dice dentro mientras no hay nada escrito
              placeholder="Ingrese la tarea"
              // evento que ayuda a recibir lo escribimos en el input
              // relacionamos el input con le estado
              onChange={(e) => setTarea(e.target.value)}
              // pasamos el estado para que se pueda limpiar
              value={tarea}
            />
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
