'use client'

import { insertarAsignatura } from "@/lib/actions";
import { useActionState, useEffect, useId } from "react";
import { toast } from "sonner";

function AsignaturaInsertar({ estudiantes }) {
    const formId = useId();

    const [ state, action, pending ]  = useActionState(insertarAsignatura, {});
    
    useEffect(() => {
        if (state.success) {
            toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        } 
    }, [state])

    return (
        <form action={action} id={formId}>
            <input name="nombre" placeholder="Nombre" />
            <input name="profesor" placeholder="Profesor/a" />
            <input name="num_horas" placeholder="Num_horas" />

            {
                estudiantes.map(estudiante =>
                    <label key={estudiante.id}>
                        <input
                            type="checkbox"
                            name={`estudiante${estudiante.id}`} // ID del Estudiante
                            value={estudiante.nombre} />

                        {estudiante.nombre}

                    </label>
                )
            }

            <button disabled={pending} className="border-2 border-black disabled:bg-gray-200">{pending ? 'Insertando...' : 'Insertar Asignatura'}</button>
        </form>
    );
}

export default AsignaturaInsertar;