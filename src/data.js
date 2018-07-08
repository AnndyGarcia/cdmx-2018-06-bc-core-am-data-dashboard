
const getData = () => {
    fetch('https://alterna87.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json')
    .then(laboratoria => laboratoria.json())
    .then(res => {
      fillsede(res);
      let sede = document.getElementById('selectede')
      drawCampus(res);
      drawGenerationsStats(res);




    })
    .catch((error) => {
        console.log(error);
    });
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
              let subthemes = Object.values(subtopics);
              subthemes.forEach(sub => {
                if(sub.completado === 1){
                  sub.completedPercentage = 100;
                }else{
                  sub.completedPercentage = 0;
                }
                // delete elements.completado;
                sub.type = sub.tipo;
              //delete elements.tipo;
                 sub.duration = sub.duracionSubtema;
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
      hours += parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.duracionPrograma);
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
