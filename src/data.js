
//window.data = {

const fillSelect = ()=> {
    let link = "https://alterna87.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json";
       fetch(link).then(function(datos){
          //console.log(datos);
        return datos.json();
        }).then(function(data){
        let sedes = document.getElementById('sedes')
        for (let i = 0; i < Object.keys(data).length; i++) {
        sedes.options[i] = new Option(Object.keys(data)[i]);
        }
        sedeGeneracion = sedes.selectedIndex;
        console.log(sedeGeneracion);
        sedes.addEventListener('change', generacion =()=> {
        let sedeGeneracion= sedes.value;
        let generaciones = document.getElementById('generaciones');
        switch (sedeGeneracion) {

          case 'lima':
          for (var i = 0; i < Object.keys(data.lima.generacion).length; i++) {
            generaciones.options[i] = new Option(Object.keys(data.lima.generacion)[i]);
          }
          case 'mexico':
          for (var i = 0; i < Object.keys(data.mexico.generacion).length; i++) {
            generaciones.options[i] = new Option(Object.keys(data.mexico.generacion)[i]);
}
          case 'santiago':
          for (var i = 0; i < Object.keys(data.santiago.generacion).length; i++) {
          generaciones.options[i] = new Option(Object.keys(data.santiago.generacion)[i]);
}
            break;
          default:
        }

      /*  for (let i = 0; i < data.sedeGeneracion.length; i++) {

      }*/
        })
        /*for (let i = 0; i < data.sedeGeneracion.length; i++) {
          array[i]
        */
        //console.log(sedes.value);


      });
      }


fillSelect();

//};
//fillSelect();





/*sedes.addEventListener("click", sede =()=> {
let c = document.createElement("option");


//  sedes.options[0] = new Option();
//alert("Click");
//Object.keys(data).length
//7Object.keys(data)[0]
});*/
