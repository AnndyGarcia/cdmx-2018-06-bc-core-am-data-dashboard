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
getData();


window.computeStudentsStats = (laboratoria) => {
  let objectdata = [];
		let campus = [];
		let generation = [];
		let i = 0;
		let j;
    let porcentStudent = '';
    let status;
    let stats = {};
    let topics;
    let subtopics;

		campus = Object.getOwnPropertyNames(laboratoria);
		generations = Object.values(laboratoria);
		generations.forEach(elements => {
			j = 0;
			let data = Object.values(elements.generacion);
      generacion = Object.getOwnPropertyNames(elements.generacion);
			data.forEach(students =>{
				let student = students.estudiantes;
				student.forEach(student => {
          porcentStudent = student.progreso.porcentajeCompletado;
          if (porcentStudent < 60) {
            status = "Baja";
          } else if (porcentStudent > 90) {
            status = "Alta";
          } else {
            status = "Media";
          }
          const themes = Object.getOwnPropertyNames(student.progreso.temas);

          //let subthemes = Object.getOwnPropertyNames(student.progreso.temas.subtemas);
          for (topic of themes) {
            let propierityTheme = Object.defineProperty(student.progreso.temas, topic, { writable: true });
            topics = propierityTheme;
            theme = Object.values(topics);
            for (let i = 0; i < theme.length; i++) {
              theme[i].completedPercentage = theme[i].porcentajeCompletado;
              let progress = (theme[i].duracionTemaCompletado * 100) / theme[i].duracionTema;
              theme[i].percentageDuration = Math.round(progress);
              theme[i].subtopics = theme[i].subtemas;
              let subtopics = theme[i].subtopics;
              let propiedades = Object.values(subtopics);
              propiedades.forEach(elements => {
                if(elements.completado === 1){
                  elements.completedPercentage = 100;
                }else{
                  elements.completedPercentage = 0;
                }
                // delete elements.completado;
                elements.type = elements.tipo;
              //delete elements.tipo;
                 elements.duration = elements.duracionSubtema;
              });


              }
    }

         objectdata.push({'campus': campus[i], 'generation': generacion[j], 'name': student.nombre, 'email': student.correo, 'turn': student.turno, 'stats': {
              'status': status, 'completedPercentage': porcentStudent, 'topics': topics}});
				});
				j++;
			})
			i++;


		});
		return objectdata;

}

window.computeGenerationsStats = (laboratoria) => {

    let campus = document.getElementById('selectede').value;
    let generation = document.getElementById('generaciones').value;
    count = laboratoria[campus].generacion[generation].estudiantes.length;
    let average = 0;
    let hours = 0;
    let introduction;
    let variables;
    let ux;
    let arr = {
        "generation" : []
    }
    //console.log(count);
    for (let i in laboratoria[campus].generacion[generation].estudiantes) {
      average += parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.porcentajeCompletado);
      hours = parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.duracionPrograma);
      introduction = parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.temas["01-Introduccion-a-programacion"].porcentajeCompletado);
      variables = parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.temas["02-Variables-y-tipo-de-datos"].porcentajeCompletado);
      ux = laboratoria[campus].generacion[generation].estudiantes[i].progreso.temas["03-UX"].porcentajeCompletado;
      }

  average = Math.round((average / count));
  hours = Math.round((hours / count)/60);

  //console.log(average)
arr.generation.push({"campus" : campus, "generation" : generation, "average" : average, "count" : count, "hours" : hours, "introduction": introduction, "variables": variables, "ux": ux});
return arr.generation[0];

}

window.sortStudents = (students, orderBy, orderDirection) =>{

}

window.filterStudents = (students, search) =>{

}

const createSubtopics =(subtemas) =>{
  let subtopics = subtemas;
  let propiedades = Object.values(subtopics);
  propiedades.forEach(elements => {
    if(elements.completado === 1){
      elements.completedPercentage = 100;
    }else{
      elements.completedPercentage = 0;
    }
    // delete elements.completado;
    elements.type = elements.tipo;
  //delete elements.tipo;
     elements.duration = elements.duracionSubtema;
  })
  return subtopics
}
