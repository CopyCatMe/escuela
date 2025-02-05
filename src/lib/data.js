'use server'

import prisma from "@/lib/prisma"

// ---------------------   GRUPOS -----------------------

async function obtenerGrupos() {
    const grupos = await prisma.grupo.findMany()
    return grupos
}


async function obtenerGrupo(id) {
    const grupo = await prisma.grupo.findUnique({
        where: { id: +id }
    })
    return grupo
}


// ---------------------   ESTUDIANTES -----------------------

async function obtenerEstudiantes() {
    const estudiantes = await prisma.estudiante.findMany()
    return estudiantes
}


async function obtenerEstudiante(id) {
    const estudiante = await prisma.estudiante.findUnique({
        where: { id: +id },
        include: {
            grupo: true,
            asignaturas: true,
        }
    })
    return estudiante
}

// ---------------------   ASIGNATURAS -----------------------

async function obtenerAsignaturas() {
    const asignaturas = await prisma.asignatura.findMany({
        include: { estudiantes: true }
    })
    return asignaturas
}


async function obtenerAsignatura(id) {
    const asignatura = await prisma.asignatura.findUnique({
        where: { id: +id },
        include: { estudiantes: true }
    })
    return asignatura
}


export {
    obtenerGrupos,
    obtenerGrupo,
    obtenerEstudiantes,
    obtenerEstudiante,
    obtenerAsignaturas,
    obtenerAsignatura
}