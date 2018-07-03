
const getData = () => {
    fetch('https://alterna87.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json')
    .then(laboratoria => laboratoria.json())
    .then(res => {
      fillsede(res);
      let sede = document.getElementById('selectede')
      drawCampus(res);
      drawGenerationsStats(res);


      //const generations = computeGenerationsStats(res);
        //const users = computeStudentsStats(laboratoria);
        //console.log(generations);
        //drawCampus(generations);


    })
    .catch((error) => {
        console.log(error);
    });
}
//DRAW SELECTS
const fillsede =(data) => {
  let sedes = document.getElementById('selectede')
  console.log(Object.keys(data));
     for (let i = 0; i< Object.keys(data).length; i++) {
  sedes.options[i] = new Option(Object.keys(data)[i]);
  }

}
const drawCampus =(data) => {
  let sede = document.getElementById('selectede').value;
  let generation = document.getElementById('generaciones');
  console.log(Object.keys(data[sede].generacion));
  for (let i = 0; i< Object.keys(data[sede].generacion).length; i++) {
    generation.options[i] = new Option(Object.keys(data[sede].generacion)[i]);
}


}
//GET DATA FETCH
getData();
//DRAW SEDE TOP
let sede = document.getElementById('selectede');
sede.addEventListener('change', generacion =()=> {

let drawsede = document.getElementById('sededrawn');
drawsede.innerHTML = "Sede "+ sede.value;

})

const drawGenerationsStats =(data)=> {
  let count = document.getElementById('count');
  count.innerHTML ="Laboratorians " + computeGenerationsStats(data).count;
  let porcent = document.getElementById('porcent');
  porcent.innerHTML =computeGenerationsStats(data).average+ "%";

  let gene = document.getElementById('generaciones');
  gene.addEventListener('change', generacion =()=> {
  count.innerHTML ="Laboratorians " + computeGenerationsStats(data).count;
  porcent.innerHTML =computeGenerationsStats(data).average+ "%";

  })

}





//sededrawn.innerHTML = sede;


/*const drawCampus = (data, sede) => {

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
    }

    containerCampus.addEventListener('change', drawCampus);
}*/


const drawGenerations = (e) => {
    //computeGenerationsStats(laboratoria)
};

const menusede =()=> {
document.getElementById('sedes').style.display ="block";
document.getElementById('generation').style.display = "none";
}

const menugeneration =()=> {
document.getElementById('generation').style.display ="block";
document.getElementById('sedes').style.display = "none";
}
