const getData = () => {
  fetch('https://alterna87.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json')
    .then(laboratoria => laboratoria.json())
    .then(res => {
      fillsede(res);
      drawCampus(res);
      drawStudents(res);
      drawGenerationsStats(res);
      menugeneration();
      console.log(computeStudentsStats(res));
      drawcomputeStudentsStats(computeStudentsStats(res));
    })
    .catch((error) => {
      console.log(error);
    });
};

        const themes = Object.getOwnPropertyNames(student.progreso.temas);

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
    'generation': []
  };
    // console.log(count);
  for (let i in laboratoria[campus].generacion[generation].estudiantes) {
    average += parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.porcentajeCompletado);
    hours += parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.duracionPrograma);
    introduction = parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.temas['01-Introduccion-a-programacion'].porcentajeCompletado);
    variables = parseInt(laboratoria[campus].generacion[generation].estudiantes[i].progreso.temas['02-Variables-y-tipo-de-datos'].porcentajeCompletado);
    ux = laboratoria[campus].generacion[generation].estudiantes[i].progreso.temas['03-UX'].porcentajeCompletado;
  }

window.sortStudents = (students, orderBy, orderDirection) =>{

};

window.filterStudents = (students, search) =>{

};
