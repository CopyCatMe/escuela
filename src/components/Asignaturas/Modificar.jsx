import { modificarAsignatura } from "@/lib/actions";

function AsignaturaModificar({ asignatura, estudiantes }) {

    const IDs = asignatura.estudiantes.map(e => e.id)
    console.log(IDs)

    return (
        <form action={modificarAsignatura}>
            <input type="hidden" name="id" defaultValue={asignatura.id} />
            <input name='nombre' defaultValue={asignatura.nombre} />
            <input name='profesor' defaultValue={asignatura.profesor} />
            <input name='num_horas' defaultValue={asignatura.num_horas} />

            {
                estudiantes.map(estudiante =>
                    <label key={estudiante.id}>
                        <input
                            type="checkbox"
                            name={`estudiante${estudiante.id}`} // ID del Estudiante
                            value={estudiante.nombre} 
                            defaultChecked={IDs.includes(estudiante.id)}/>

                        {estudiante.nombre}

                    </label>
                )
            }

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default AsignaturaModificar;