window.computeStudentsStats = (laboratoria) => {
    const student = [];
    let array2 = [];
    let name = '';
    let email = '';
    let campus = '';
    let stats = [];
    let status = 0;
    let completedPercentage = 0;
    let topics = [];
    let percentageDuration = 0;
    let subtopics = [];
    let type = '';
    let duration = 0;

    for (key in laboratoria) {
        campus = key;
        average = 0;
        const generations = Object.keys(laboratoria[key].generacion);
        generations.map((generation) => {
            generation = generation; 
            const students = laboratoria[key].generacion[generation].estudiantes;
            array2 = students.map((student, i, array) =>{
                name = array[i].nombre;
                email = array[i].correo;
                completedPercentage = array[i].progreso.porcentajeCompletado;
                //status =;
                const progress = array[i].progreso;
                console.log(progress);                
                //array3 = progress.map((temas, j, cadena) =>{
                    //percentageDuration = cadena[j].duracionTemaCompletado;
                    //console.log(percentageDuration);
                    return {
                        'nombre' : name,
                        'correo' : email,
                        'sede' : campus,
                        'generacion' : generation,
                        stats : {
                            'status' : status,
                            'Pocentaje completado' : completedPercentage,
                            topics : {
                                //'Pocentaje completado' : completedPercentage,
                                'Tiempo invertido' : percentageDuration + ' horas.',
                                subtopics : {
                                    //'Pocentaje completado' : completedPercentage,
                                    'Tipo' : type,
                                    'Duracion' : duration
                                }
                            }
                        }
                    }
                //})   
            })
            student.push(array2)
        })        
    }
    return student
}

window.computeGenerationsStats = (laboratoria) => {
    const generationsArray = [];

    let array2 = [];
    let average = 0;
    let campus;
    let generation;
    for (key in laboratoria) {
        campus = key;
        average = 0;
        const generations = Object.keys(laboratoria[key].generacion);
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