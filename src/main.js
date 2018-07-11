const drawStudents = (data) => {
  let campus = document.getElementById('selectede').value;
  let generation = document.getElementById('generaciones').value;
  let names = document.getElementById('names');
  // console.log(Object.keys(data[campus].generacion[generation].estudiantes).length);
  for (let i = 0 ; i < Object.keys(data[campus].generacion[generation].estudiantes).length; i++) {
    names.options[i] = new Option(data[campus].generacion[generation].estudiantes[i].nombre);
  };
};

const drawGenerationsStats = (data)=> {
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

  let campus = document.getElementById('selectede').value;
  let generation = document.getElementById('generaciones').value;
  let names = document.getElementById('names').value;
  let laboratorian = document.getElementById('names');
  let name = document.getElementById('estudents');

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
