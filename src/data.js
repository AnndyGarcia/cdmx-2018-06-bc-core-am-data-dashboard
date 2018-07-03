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

    let campus = document.getElementById('selectede').value;
    let generation = document.getElementById('generaciones').value;
    count = laboratoria[campus].generacion[generation].estudiantes.length;
    let average = 0;
    let arr = {
        "generation" : []
    }
    //console.log(count);
    for (let i in laboratoria[campus].generacion[generation].estudiantes){
      average += parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.porcentajeCompletado);
      }
    average = Math.round((average / count));
    //console.log(average)
    arr.generation.push({"campus" : campus, "generation" : generation, "average" : average, "count" : count});
    return arr.generation[0];
}

window.sortStudents = (students, orderBy, orderDirection) =>{

}

window.filterStudents = (students, search) =>{

}