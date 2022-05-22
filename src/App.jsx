import { nanoid } from "nanoid";
import { useState } from "react";


function App() {

  // creo un estado para cada tarea individual
  const [tarea, setTarea] = useState('')
  // creo un estado para guardar todas tareas
  const [tareas, setTareas] = useState([])
  // creo un estado para poder editar la tarea y usar el formulario y poder cambiar sus propiedades
  const [modoEdicion, setModoEdicion] = useState(false)
  // creo un estado para guardar el id que voy a editar
  const [id, setId] = useState('')




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
    // console.log(tarea)

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

  // Funcion para eliminar tareas
  const eliminarTarea = (id) => {
    // console.log(`Tarea eliminada ${id}`)

    // recorro las tareas y excluyo el item distinto que tome para eliminar
    // filtro todo el id distinto
    const arrayFiltrado = tareas.filter(item => item.id !== id)

    // guardo el nuevo array filtrado
    setTareas(arrayFiltrado)
  }


  // Funcion para editar tareas
  const editar = (item) => {
    // console.log(`Tarea editada ${item}`)

    // cambio a modo edicion
    setModoEdicion(true)

    // edito la propiedad del objeto o del item
    setTarea(item.nombreTarea)
    // guardo el id del item(de la tarea) que voy a editar en el estado
    setId(item.id)
  }


  // funcion de flecha, recibo un evento
  const editarTarea = (e) => {
    // evita que se procese el formulario
    // osea no haga la operacion del get
    e.preventDefault()

    // valido que tenga algun texto
    if (!tarea.trim()) {
      console.log('Campo vacio')
      // para que se salga
      return
    }
    // console.log(tarea)

    // tomamos el array de tareas y 
    // le pregunto si el item que tome tiene el mismo id ---> retorno el id y su tarea, 
    // pero si no es igual a la tarea --> retorno el item nada mas
    const arrayEditado = tareas.map(
      // si el id es igual en el caso de que el usuario edito algo, devolvemos el objeto osea la tarea
      // si no es igual devolvemos el item osea el rsto de las tareas
      (item) => item.id === id ? { id: id, nombreTarea: tarea } : item
    )

    // guardo el item
    setTareas(arrayEditado)
    // paso de modo edicion a false
    setModoEdicion(false)
    // limpia el input
    setTarea('')
    // limpio el id
    setId('')
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
                  <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    // creo mi evento
                    onClick={() => eliminarTarea(item.id)}
                  >ELIMINAR</button>
                  <button
                    className="btn btn-warning btn-sm float-right"
                    // creo mi evento
                    onClick={() => editar(item)}
                  >EDITAR</button>
                </li>
              ))
            }
          </ul>
        </div>
        {/* columna de 4 espacios */}
        <div className="col-4">
          <h4 className="text-center">
            {/* para poder editar el titulo de mi propiedad */}
            {
              // Operador ternario para poder cambiar mi formulario
              modoEdicion ? "EDITAR TAREA" : "AGREGAR TAREA"
            }
          </h4>
          {/* Hago el formulario */}
          <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
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

            {/* hago la validacion para que mi valor que tiene mi boton sea distinto si edito o creo una tarea */}
            {
              // si estoy en modo edicion
              modoEdicion ? (
                // button.btn.btn-dark.btn-block
                < button
                  className="btn btn-warning btn-block"
                  // para que funcione con la tecla enter
                  type="submit"
                >Editar</button>
              ) : (
                // button.btn.btn-dark.btn-block
                < button
                  className="btn btn-dark btn-block"
                  // para que funcione con la tecla enter
                  type="submit">Agregar</button>
              )
            }

          </form>
        </div>
      </div>
    </div >
  );
}

export default App;
