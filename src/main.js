const fillsede = (data) => { // Draw the select of the campus
  let sedes = document.getElementById('selectede'); // Get the select that contains the campus options
  for (let i = 0; i < Object.keys(data).length; i++) {
    sedes.options[i] = new Option(Object.keys(data)[i]); // Create the options dynamically
  }
  sedes.selectedIndex = 1;
};

const drawCampus = (data) => { // Function that draw the campus & generations
  let sede = document.getElementById('selectede').value; // Take the value of campus
  let generation = document.getElementById('generaciones'); // Get the select that contains the generations options
  let generationStudent = document.getElementById('generacionesStudent');
  for (let i = 0; i < Object.keys(data[sede].generacion).length; i++) {
    generation.options[i] = new Option(Object.keys(data[sede].generacion)[i]); // Create the options dynamically
  }
};

const drawStudents = (data) => { // Function that draw the students
  let campus = document.getElementById('selectede').value; // Take the value of campus
  let generation = document.getElementById('generaciones').value; // Take the value of generation
  let names = document.getElementById('names'); // Get the select that contains the students options
  // console.log(Object.keys(data[campus].generacion[generation].estudiantes).length);
  for (let i = 0 ; i < Object.keys(data[campus].generacion[generation].estudiantes).length; i++) {
    names.options[i] = new Option(data[campus].generacion[generation].estudiantes[i].nombre); // Create the options dynamically
  }
};

// GET DATA FETCH
// DRAW SEDE TOP
const drawsede = ()=> { // Function that changes the campus text in the head section
  let sede = document.getElementById('selectede').value; // Take the value of campus selected
  sede.addEventListener('change', generacion = ()=> { // Create an event when campus changes
    let drawsede = document.getElementById('sededrawn'); // Get the element that contains the campus
    drawsede.innerHTML = 'Sede ' + sede.value; // Change the campus static by the campus selected
  });
};

const drawGenerationsStats = (data)=> { // Function that draw the statistic of each generation
  let count = document.getElementById('count'); // Get the element that contains the count of students by generation
  count.innerHTML = `Laboratorians: ${computeGenerationsStats(data).count} estudiantes`; // Draw the count of students dynamically
  let porcent = document.getElementById('porcent'); // Get the element that contains the progress of each generation
  porcent.innerHTML = `<p class="card-text ">${computeGenerationsStats(data).average} %</p>`; // Draw the progress of each generation dynamically
  let hours = document.getElementById('hours'); // Get the element that contains the time invested by generation
  hours.innerHTML = `<p class= 'card-text'>${computeGenerationsStats(data).hours} h</p>`; // Draw the time invested dynamically
  let gene = document.getElementById('generaciones'); // Get the element that contains the generation
  let theme = document.getElementById('theme'); // Get the element that contains the topics
  theme.innerHTML = `<section class='col-sm-12 col-lg-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        Introducción a la Programación
      </h5>
      <section class= 'card-body advanceLMS text-center'>
        <p class='card-text'>${computeGenerationsStats(data).introduction} %</p>
      </section>
    </section>
    <section class='col-sm-12 col-lg-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        Variables y tipos de Datos
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class='card-text'>${computeGenerationsStats(data).variables} %</p>
      </section>
    </section>
    <section class='col-sm-12 col-lg-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        UX
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class="card-text ">${computeGenerationsStats(data).ux} % </p>
      </section>
    </section>`; // Draw the info of each topic by generation

  gene.addEventListener('change', generacion = ()=> { // Event that change the statistics of each generation
    count.innerHTML = `Laboratorians: ${computeGenerationsStats(data).count} estudiantes`; // Draw the count of student by each generation
    porcent.innerHTML = `<p class="card-text ">${computeGenerationsStats(data).average} %</p>`; hours.innerHTML = `<p class= 'card-text'>${computeGenerationsStats(data).hours} h</p>`; // Draw the general statistics by each generation
    theme.innerHTML = `<section class='col-sm-12 col-lg-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        Introducción a la Programación
      </h5>
      <section class= 'card-body advanceLMS text-center'>
        <p class='card-text'>${computeGenerationsStats(data).introduction} %</p>
      </section>
    </section>
    <section class='col-sm-12 col-lg-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        Variables y tipos de Datos
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class='card-text'>${computeGenerationsStats(data).variables} %</p>
      </section>
    </section>
    <section class='col-sm-12 col-lg-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        UX
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class="card-text ">${computeGenerationsStats(data).ux} %</p>
      </section>
    </section>`; // Draw the info of topics by each generation
    drawStudents(data); // Invoke the function that draw students
  });
};


const drawcomputeStudentsStats = (data)=> { // Function that draw the statistics of each student
  let campus = document.getElementById('selectede').value; // Take the value of the campus
  let generation = document.getElementById('generaciones').value; // Take the value of the generation
  let names = document.getElementById('names').value; // Take the value of the name of students
  let laboratorian = document.getElementById('names'); // Get the select that conyains the options of students
  let name = document.getElementById('estudents'); // Get the element that draw the name of students

  laboratorian.addEventListener('change', move = () => { // Change the info of a student when she was selected
    campus = document.getElementById('selectede').value; // Take the value of campus
    generation = document.getElementById('generaciones').value; // Take the value of generation
    names = document.getElementById('names').value; // Take the value of the name (info)
    // console.log(names);
    // TO DEPLOY DATA ComputeStudentsStats
    let laboratorians = Object.values(data);
    for (var i = 0; i < (laboratorians).length; i++) { // Through the list of students
      if (laboratorians[i].campus === campus && laboratorians [i].name === names && laboratorians[i].generation === generation) { // Verify if the info is true by student
        name.innerHTML = `
  <p class ='bold'>Turno ${laboratorians[i].turn}</p>
  <h2 class="black">${laboratorians[i].name}</h2>
<section class="row">
    <section class="col-sm-12 col-lg-4 ground">
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

<section class="col-sm-12 col-lg-4 ground">
  <h5 class="card-header black size-a font-weight-bold text-center  bg-warning">
    Porcentaje Completado
  </h5>
  <section class="card-body advanceLMS text-center"><p class="card-text ">${laboratorians[i].stats.completedPercentage} %</p></section>
</section>
</section>

<section class="row">
<section class='col-sm-12 col-lg-4 ground'>
  <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
    Introduccion a la Programación
  </h5>
  <section class='card-body advanceLMS text-center'>
    <p class="card-text ">${laboratorians[i].stats.topics['01-Introduccion-a-programacion'].completedPercentage} % </p>
  </section>
  </section>
  <section class='col-sm-12 col-lg-4 ground'>
    <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
      Variables y tipos de Datos
    </h5>
    <section class='card-body advanceLMS text-center'>
      <p class='card-text'>${laboratorians[i].stats.topics['02-Variables-y-tipo-de-datos'].completedPercentage} %</p>
    </section>
    </section>
    <section class='col-sm-12 col-lg-4 ground'>
      <h5 class='card-header black size-a font-weight-bold text-center  bg-warning'>
        UX
      </h5>
      <section class='card-body advanceLMS text-center'>
        <p class="card-text ">${laboratorians[i].stats.topics['03-UX'].completedPercentage} % </p>
      </section>

</section>
`; // Draw all the general info of each student
      }
    }
  });
};

// Functcionality of the sidebar campus option
const menusede = ()=> {
  document.getElementById('sedes').style.display = 'block'; // Only shows the select that contains the campus options
  document.getElementById('estudents').style.display = 'none';
  document.getElementById('generation').style.display = 'none';
  document.getElementById('sedea').classList.add('backyellow');
  document.getElementById('reports').classList.remove('backyellow');
  document.getElementById('laboratorians').classList.remove('backyellow');
};

// Functcionality of the sidebar generation statistics option
const menugeneration = ()=> {
  let values = document.getElementById('values');

  document.getElementById('generation').style.display = 'block'; // Shows the select that contains the generations options
  document.getElementById('values').style.display = 'block'; // Shows the statistics of the generation selected
  document.getElementById('sedes').style.display = 'none'; // Hidden the select that contains the campus options
  document.getElementById('estudents').style.display = 'none'; // Hidden he select that contains the students options
  document.getElementById('reports').classList.add('backyellow');
  document.getElementById('sedea').classList.remove('backyellow');
  document.getElementById('laboratorians').classList.remove('backyellow');
};

// Functcionality of the sidebar students statistics option
const menulaboratorians = ()=> {
  document.getElementById('estudents').style.display = 'block'; // Show the select that contains the students options
  document.getElementById('sedes').style.display = 'none'; // Hidden the select that contains the campus options
  document.getElementById('generation').style.display = 'block'; // Show the select that contains the generations options
  document.getElementById('values').style.display = 'none'; // Hidden the statistics of the generation selected
  document.getElementById('laboratorians').classList.add('backyellow');
  document.getElementById('reports').classList.remove('backyellow');
  document.getElementById('sedea').classList.remove('backyellow');
};
