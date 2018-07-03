const getData = () => {
    fetch('https://api.myjson.com/bins/nslqe')
    .then(laboratoria => laboratoria.json())
    .then((laboratoria) => {
        const generations = computeGenerationsStats(laboratoria);
        const users = computeStudentsStats(laboratoria);
        console.log(generations);
        console.log(users);
        drawCampus(generations);
        drawGenerations(users);
    })
    .catch((error) => {
        console.log(error);
    });
}

getData();

const drawCampus = (data) => {
    const sedes = Object.keys(data);

    const containerCampus = document.getElementById('campus');
    sedes.forEach((sede) => {
        const option = document.createElement('option');
        option.innerHTML = sede;
        containerCampus.appendChild(option);
    });

    containerCampus.addEventListener('change', drawCampus);
};


const drawGenerations = (e) => {
    const stats =  Object.keys(e);

    const containerStats = document.getElementById('campus2');
    stats.forEach((stat) => {
        const option = document.createElement('option');
        option.innerHTML = stat;
        containerStats.appendChild(option);
    });

    containerStats.addEventListener('change', drawGenerations);
};

