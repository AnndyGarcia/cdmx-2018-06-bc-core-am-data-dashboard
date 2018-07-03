
window.computeStudentsStats = (laboratoria) => {

}

window.computeGenerationsStats = (laboratoria) => {
    const generationsArray = [];
    let array2 = [];
    let average = 0;
    let campus='';
    let generation ='';
    for (key in laboratoria) {
        campus = key;
        average = 0;
        let generations = Object.keys(laboratoria[key].generacion);
        generations.map((generation) => {
            generation = generation;
            const students = laboratoria[key].generacion[generation].estudiantes;
            array2 = students.map((student, i, array) =>{
                average += array[i].progreso.porcentajeCompletado;
                average = Math.round(average / array.length);
                return {
                    'campus' : key,
                    'generation' : generation,
                    'average' : average,
                    'count': array.length
                }
            })
            generationsArray.push(array2)
        })
    }
    return generationsArray
}

window.sortStudents = (students, orderBy, orderDirection) =>{

}

window.filterStudents = (students, search) =>{

}
