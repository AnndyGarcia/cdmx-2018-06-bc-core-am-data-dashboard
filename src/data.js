const getData = () => { // Function that calls the data & assigns it in the functions
  fetch('https://alterna87.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json') // Get the data from the JSON from a HTTPS address
    .then(laboratoria => laboratoria.json()) // Get the raw data & convert it to a JSON
    .then(res => {
      fillsede(res);
      let sede = document.getElementById('selectede');
      drawCampus(res); // Displays the campus on the screen
      drawStudents(res); // Displays the students on the screen
      drawGenerationsStats(res); // Displays the generations on the screen
      menugeneration(); // Generates the generation menu dynamically
      // console.log(computeStudentsStats(res));
      drawcomputeStudentsStats(computeStudentsStats(res)); // Take the computeStudentsStats data & display it on the screen
    })
    .catch((error) => {
      console.log(error); // If there is an error, it shows in console "error"
    });
};

window.onload = getData(); // Load the data automatically

window.computeStudentsStats = (laboratoria) => { // Function that generates the statistics of each student
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

  campus = Object.getOwnPropertyNames(laboratoria); // Get the campus
  generations = Object.values(laboratoria); // Enter into the generations
  generations.forEach(elements => { // Through the generations
    j = 0;
    let data = Object.values(elements.generacion); // Take the valor of each generation
    generacion = Object.getOwnPropertyNames(elements.generacion); // Get the generation
    data.forEach(students =>{ // Through the students
      let student = students.estudiantes;
      student.forEach(student => { // Through each element by each student
        porcentStudent = student.progreso.porcentajeCompletado; // Save the general progress
        if (porcentStudent < 60) { // Classify each student by her progress
          status = 'Baja';
        } else if (porcentStudent > 90) {
          status = 'Alta';
        } else {
          status = 'Media';
        }
        const themes = Object.getOwnPropertyNames(student.progreso.temas); // Get the topics

        // let subthemes = Object.getOwnPropertyNames(student.progreso.temas.subtemas);
        for (topic of themes) { // Get each topic
          let propierityTheme = Object.defineProperty(student.progreso.temas, topic, { writable: true });
          topics = propierityTheme;
          theme = Object.values(topics);
          for (let i = 0; i < theme.length; i++) { // Through the topics
            theme[i].completedPercentage = theme[i].porcentajeCompletado; // Save the progress of each topic
            let progress = (theme[i].duracionTemaCompletado * 100) / theme[i].duracionTema; // Make a average of the progress
            theme[i].percentageDuration = Math.round(progress); 
            theme[i].subtopics = theme[i].subtemas; // Save the route of subtopics
            let subtopics = theme[i].subtopics; // Save the subtopics
            let subthemes = Object.values(subtopics);
            subthemes.forEach(sub => { // Through the subtopics
              if (sub.completado === 1) { // Classify subtopics by progress
                sub.completedPercentage = 100;
              } else {
                sub.completedPercentage = 0;
              }
              // delete elements.completado;
              sub.type = sub.tipo; // Save the route of type of each subtopic
              // delete elements.tipo;
              sub.duration = sub.duracionSubtema; // Save the route of duration of each subtopic
            });
          }
        }

        objectdata.push({'campus': campus[i], // Save the data in a object
          'generation': generacion[j],
          'name': student.nombre,
          'email': student.correo,
          'turn': student.turno,
          'stats': {
            'status': status,
            'completedPercentage': porcentStudent,
            'topics': topics}});
      });
      j++;
    });
    i++;
  });
  return objectdata; // return the object with the data
};

window.computeGenerationsStats = (laboratoria) => { // Function that generates the statistics of each generation
  let campus = document.getElementById('selectede').value; // Take the value of the select that contains the campus
  let generation = document.getElementById('generaciones').value; // Take the value of the select that contains the generations
  count = laboratoria[campus].generacion[generation].estudiantes.length; // Get the value of the students in a generation
  let average = 0;
  let hours = 0;
  let introduction;
  let variables;
  let ux;
  let arr = {
    'generation': []
  };
  // console.log(count);
  for (let i in laboratoria[campus].generacion[generation].estudiantes) { // Through the elements of each student
    average += parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.porcentajeCompletado); // Save the progress of all students in a generation
    hours += parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.duracionPrograma); // Save the time invested of all students in a generation
    introduction = parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado); // Save the progress in the first topic of all students in a generation
    variables = parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado); // Save the progress in the second topic of all students in a generation
    ux = laboratoria[campus].generacion[generation].estudiantes[i].progreso.temas['03-UX'].porcentajeCompletado; // Save the progress in the third topic of all students in a generation
  }

  average = Math.round((average / count)); // Make a average of the progress obtained previously
  hours = Math.round((hours / count) / 60); // Make a average of the time invested obtained previously

  // console.log(average)
  arr.generation.push({'campus': campus, // Save all the data in a array
    'generation': generation,
    'average': average,
    'count': count,
    'hours': hours,
    'introduction': introduction,
    'variables': variables,
    'ux': ux});
  return arr.generation[0]; // Return the array with the data
};

window.sortStudents = (students, orderBy, orderDirection) =>{

};

window.filterStudents = (students, search) =>{

};
