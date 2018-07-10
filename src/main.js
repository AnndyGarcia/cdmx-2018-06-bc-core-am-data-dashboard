//DRAW SELECTS
const fillsede =(data) => {
  let sedes = document.getElementById('selectede')
     for (let i = 0; i< Object.keys(data).length; i++) {
  sedes.options[i] = new Option(Object.keys(data)[i]);
  }
sedes.selectedIndex=1;
}


const drawCampus =(data) => {

  let sede = document.getElementById('selectede').value;
  let generation = document.getElementById('generaciones');
  let generationStudent = document.getElementById('generacionesStudent');
  for (let i = 0; i< Object.keys(data[sede].generacion).length; i++) {
    generation.options[i] = new Option(Object.keys(data[sede].generacion)[i]);
}
}

const drawStudents = (data) => {

let campus = document.getElementById('selectede').value;
let generation = document.getElementById('generaciones').value;
let names = document.getElementById('names');
// console.log(Object.keys(data[campus].generacion[generation].estudiantes).length);
for (let i = 0 ; i < Object.keys(data[campus].generacion[generation].estudiantes).length; i++) {
  names.options[i] = new Option(data[campus].generacion[generation].estudiantes[i].nombre);

}


}
//GET DATA FETCH
//DRAW SEDE TOP

const drawsede =()=> {
let sede = document.getElementById('selectede');
sede.addEventListener('change', generacion =()=> {

let drawsede = document.getElementById('sededrawn');
drawsede.innerHTML = "Sede "+ sede.value;

});
}

const drawGenerationsStats =(data)=> {
  let count = document.getElementById('count');
  count.innerHTML = `Laboratorians: ${computeGenerationsStats(data).count} estudiantes`;
  let porcent = document.getElementById('porcent');
  porcent.innerHTML = `<p class="card-text ">${computeGenerationsStats(data).average} %</p>`;
  let hours = document.getElementById('hours');
  hours.innerHTML = `<p class= 'card-text'>${computeGenerationsStats(data).hours} h</p>`;
  let gene = document.getElementById('generaciones');
  let theme = document.getElementById('theme');
  theme.innerHTML = `<section class='col-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        Introducción a la Programación
      </h5>
      <section class= 'card-body advanceLMS text-center'>
        <p class='card-text'>${computeGenerationsStats(data).introduction} %</p>
      </section>
    </section>
    <section class='col-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        Variables y tipos de Datos
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class='card-text'>${computeGenerationsStats(data).variables} %</p>
      </section>
    </section>
    <section class='col-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        UX
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class="card-text ">${computeGenerationsStats(data).ux} % </p>
      </section>
    </section>`;

  gene.addEventListener('change', generacion =()=> {
  count.innerHTML = `Laboratorians: ${computeGenerationsStats(data).count} estudiantes`;
  porcent.innerHTML = `<p class="card-text ">${computeGenerationsStats(data).average} %</p>`;  hours.innerHTML = `<p class= 'card-text'>${computeGenerationsStats(data).hours} h</p>`;
  theme.innerHTML = `<section class='col-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        Introducción a la Programación
      </h5>
      <section class= 'card-body advanceLMS text-center'>
        <p class='card-text'>${computeGenerationsStats(data).introduction} %</p>
      </section>
    </section>
    <section class='col-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        Variables y tipos de Datos
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class='card-text'>${computeGenerationsStats(data).variables} %</p>
      </section>
    </section>
    <section class='col-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        UX
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class="card-text ">${computeGenerationsStats(data).ux} %</p>
      </section>
    </section>`;
    drawStudents(data);
  });
}

const drawcomputeStudentsStats =(data)=> {

  let campus = document.getElementById('selectede').value;
  let generation = document.getElementById('generaciones').value;
  let names = document.getElementById('names').value;
  let laboratorian = document.getElementById('names');
  let name = document.getElementById('estudents');

//SELECT LABORATORIAN
laboratorian.addEventListener('change', move = () => {
  campus = document.getElementById('selectede').value;
  generation = document.getElementById('generaciones').value;
  names = document.getElementById('names').value;
//console.log(names);
//TO DEPLOY DATA ComputeStudentsStats
let laboratorians = Object.values(data);
for (let i = 0; i < (laboratorians).length; i++) {
//DRAW DATA BY STUDENTS
if (laboratorians[i].campus == campus && laboratorians [i].name == names && laboratorians[i].generation == generation) {
  name.innerHTML = `
  <p class ='bold'>Turno ${laboratorians[i].turn}</p>
  <h2 class="black">${laboratorians[i].name}</h2>
<section class="row">
    <section class="col-4 ground">
    <h5 class="card-header black size-a font-weight-bold text-center  bg-warning">
      Información General
    </h5>
    <section class="card-body advanceLMS">
      <p class="bold"> Status: ${laboratorians[i].stats.status} <br>
      Sede ${laboratorians[i].campus} <br>
      Generación ${laboratorians[i].generation} <br>
      Correo ${laboratorians[i].email}
      </p>
    </section>
</section>

<section class="col-4 ground">
  <h5 class="card-header black size-a font-weight-bold text-center  bg-warning">
    Porcentaje Completado
  </h5>
  <section class="card-body advanceLMS text-center"><p class="card-text ">${laboratorians[i].stats.completedPercentage} %</p></section>
</section>
</section>

<section class="row">
<section class='col-4 ground'>
  <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
    Introduccion a la Programación
  </h5>
  <section class='card-body advanceLMS text-center'>
    <p class="card-text ">${laboratorians[i].stats.topics['01-Introduccion-a-programacion'].completedPercentage} % </p>
  </section>
  </section>
  <section class='col-4 ground'>
    <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
      Variables y tipos de Datos
    </h5>
    <section class='card-body advanceLMS text-center'>
      <p class='card-text'>${laboratorians[i].stats.topics['02-Variables-y-tipo-de-datos'].completedPercentage} %</p>
    </section>
    </section>
    <section class='col-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        UX
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class="card-text ">${laboratorians[i].stats.topics['03-UX'].completedPercentage} % </p>
      </section>

</section>
`;

  }
}
//console.log(Object.keys(data).length);

});
}

//FUNCIONALIDAD DEL ASIDE
//Función de menu vertical de Sede
const menusede =()=> {

document.getElementById('sedes').style.display ="block";
document.getElementById('estudents').style.display ="none";
document.getElementById('generation').style.display ="none"
document.getElementById('sedea').classList.add('backyellow');
document.getElementById('reports').classList.remove('backyellow');
document.getElementById('laboratorians').classList.remove('backyellow');
}

//Función de menu vertical de Reports
const menugeneration =()=> {
  let values = document.getElementById('values');

document.getElementById('generation').style.display ="block"
document.getElementById('values').style.display ="block"
document.getElementById('sedes').style.display = "none";
document.getElementById('estudents').style.display ="none";
document.getElementById('reports').classList.add('backyellow');
document.getElementById('sedea').classList.remove('backyellow');
document.getElementById('laboratorians').classList.remove('backyellow');
}
//Función de menu vertical de Laboratorians
const menulaboratorians =()=> {
document.getElementById('estudents').style.display ="block";
document.getElementById('sedes').style.display = "none";

document.getElementById('generation').style.display ="block"
document.getElementById('values').style.display ="none"
document.getElementById('laboratorians').classList.add('backyellow');
document.getElementById('reports').classList.remove('backyellow');
document.getElementById('sedea').classList.remove('backyellow');
}
