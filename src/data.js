
window.computeStudentsStats = (laboratoria) => {

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


 //termina window
/*window.computeGenerationsStats = (laboratoria) => {
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
} */

window.sortStudents = (students, orderBy, orderDirection) =>{

}

window.filterStudents = (students, search) =>{

}
