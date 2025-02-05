import Modal from "@/components/Modal";
import { obtenerEstudiantes, obtenerGrupos } from "@/lib/data";
import EstudianteInsertar from "./Insertar";
import EstudianteEliminar from "./Eliminar";
import EstudianteModificar from "./Modificar";
import Link from "next/link";


export default async function Estudiantes() {
    const estudiantes = await obtenerEstudiantes()
    const grupos = await obtenerGrupos()

    console.log(estudiantes);
    return (
        <div>

            <Modal openElement={<p className="inline border-2 border-black">Insertar estudiante</p>}>
                <EstudianteInsertar grupos={grupos} />
            </Modal>


            {
                estudiantes.map(estudiante =>
                    <div key={estudiante.id} className="p-4 mb-4 bg-slate-200 rounded-lg">
                        <div >
                            <Link href={`/estudiantes/${estudiante.id}`} className="text-2xl block">
                                {estudiante.nombre}
                            </Link>
                            <p>{estudiante.fecha_nacimiento.toLocaleDateString()}</p>
                            <p><img src={estudiante.foto} className="size-48 object-cover rounded-full" /></p>
                            <p>{estudiante.tutor_legal}</p>
                            <p>{grupos.find(grupo => grupo.id === estudiante.grupoId)?.nombre}</p>
                        </div>

                        <Modal openElement={<p className="inline border-2 border-black">Modificar</p>}>
                            <EstudianteModificar estudiante={estudiante} grupos={grupos} />
                        </Modal>

                        <Modal openElement={<p className="inline border-2 border-black">Eliminar</p>}>
                            <EstudianteEliminar estudiante={estudiante} />
                        </Modal>

                        <hr />
                    </div>
                )
            }
        </div>
    );
}