import { obtenerAsignatura } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Asignatura({ id }) {
    const asignatura = await obtenerAsignatura(id)
    // console.log(asignatura);

    if (!asignatura) notFound()

    return (
        <div>
            <p> {asignatura.nombre} </p>
            <p> {asignatura.profesor} </p>
            <p> {asignatura.num_horas} </p>
            {
                asignatura.estudiantes.map(estudiante =>
                    <div key={estudiante.id} className="p-4 mb-4 bg-slate-200 rounded-lg" >
                        <p> {estudiante.nombre} </p>
                    </div>
                )

            }
        </div>
    );
}

