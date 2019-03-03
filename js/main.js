
d3.csv('../static/Hot Stuff.csv')
.then(data=>{
    var dataByYear = [];
    var dataByPerformers = {};
    var dataBy5Years = [];
    const latestYear = 2019;
    let minYear = latestYear;

    //find min year & organize data by performer
    data.forEach(elem=>{
        let year = parseInt(elem.WeekID.split('/')[2]);
        minYear = Math.min(minYear, year);
        dataByYear[year] = dataByYear[year]||[];
        dataByYear[year].push(elem);

        dataByPerformers[elem.Performer] = dataByPerformers[elem.Performer]||[];
        dataByPerformers[elem.Performer][year] = dataByPerformers[elem.Performer][year]||[];
        dataByPerformers[elem.Performer][year].push(elem);
    });

    //data by 5 year
    for (let year in dataByYear){
        if(dataByYear[year] === undefined)continue;
        let period = Math.floor((parseInt(year)-minYear)/5);
        dataBy5Years[period] = (dataBy5Years[period]||[]).concat(dataByYear[year]);
    }

    console.log(dataByPerformers)

    console.log(dataBy5Years)

})

