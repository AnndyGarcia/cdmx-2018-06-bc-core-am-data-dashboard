
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
//DRAW SELECTS
const fillsede =(data) => {
  let sedes = document.getElementById('selectede')
     for (let i = 0; i< Object.keys(data).length; i++) {
  sedes.options[i] = new Option(Object.keys(data)[i]);
  }

}
const drawCampus =(data) => {
  let sede = document.getElementById('selectede').value;
  let generation = document.getElementById('generaciones');
  for (let i = 0; i< Object.keys(data[sede].generacion).length; i++) {
    generation.options[i] = new Option(Object.keys(data[sede].generacion)[i]);
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
  });
}
//FUNCIONALIDAD DEL ASIDE
//Función de menu vertical de Sede
const menusede =()=> {
document.getElementById('sedes').style.display ="block";
document.getElementById('generation').style.display = "none";
document.getElementById('sedea').classList.add('backyellow');
document.getElementById('reports').classList.remove('backyellow');
document.getElementById('laboratorians').classList.remove('backyellow');
}
//Función de menu vertical de Reports
const menugeneration =()=> {
document.getElementById('generation').style.display ="block";
document.getElementById('sedes').style.display = "none";
document.getElementById('reports').classList.add('backyellow');
document.getElementById('sedea').classList.remove('backyellow');
document.getElementById('laboratorians').classList.remove('backyellow');
}
//Función de menu vertical de Laboratorians
const menulaboratorians =()=> {
document.getElementById('generation').style.display ="none";
document.getElementById('sedes').style.display = "none";
document.getElementById('laboratorians').classList.add('backyellow');
document.getElementById('reports').classList.remove('backyellow');
document.getElementById('sedea').classList.remove('backyellow');

}
