
const getData = () => {
    fetch('https://alterna87.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json')
    .then(laboratoria => laboratoria.json())
    .then((res) => {
      fillsede(res);
      sede = document.getElementById('selectede')
      drawCampus(res);
      //const generations = computeGenerationsStats(res);
        //const users = computeStudentsStats(laboratoria);
        //console.log(generations);
        //drawCampus(generations);


    })
    .catch((error) => {
        console.log(error);
    });
}

const fillsede =(data) => {
  let sedes = document.getElementById('selectede')
  console.log(Object.keys(data));
     for (let i = 0; i< Object.keys(data).length; i++) {
  sedes.options[i] = new Option(Object.keys(data)[i]);
  }

}

getData();

const drawCampus = (data, sede) => {

    const sedes = Object.keys(data[sede].generacion);
    //Select
    const containerCampus = document.getElementById('generaciones');
    sedes.forEach((sede) => {
    const option = document.createElement('option');
    option.innerHTML = sede;
    containerCampus.appendChild(option);
    });
  /*  for(x in data.message) {
      random.innerHTML ="<img src'"+data.message[x]+"'>"
    } */

    containerCampus.addEventListener('change', drawCampus);
};


const drawGenerations = (e) => {
    //computeGenerationsStats(laboratoria)
};

const generation =()=> {
document.getElementById('sedes').style.display ="block";
document.getElementById('generation').style.display = "none";
}
