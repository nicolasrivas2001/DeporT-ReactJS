export const apiSports=async(setDataApi,type,date,idLeague,idSeason,dataApi)=>{
    let idApi=0
    let calls=0

    const arrayIds=[
        "c64a7c57b4a065aaef7670cd1438f91f",
    ]
    if(type==="futbol"){
        await fetchApi(setDataApi,idApi,arrayIds,calls,type)
    }else if(type==="basquet"){
        await fetchApi(setDataApi,idApi,arrayIds,calls,type,date,idLeague,idSeason,dataApi)
    }
}

const fetchApi=(setDataApi,idApi,arrayIds,calls,type,date,idLeague,idSeason,dataApi)=>{

    let url=""

    if(calls===arrayIds.length){
        alert(`SUPERAMOS LOS LÍMITES DE LLAMADAS GRATUITAS (${type}), YA QUE ES UNA API PAGA. VUELVA MAÑANA PARA VER NUESTRO TRABAJO! GRACIAS.`)
        return
    }else{

        if(type==="futbol"){
            url= "https://v3.football.api-sports.io/fixtures?live=all"
        }else if(type==="basquet"){
            url=`https://v1.basketball.api-sports.io/games?date=${date}&league=${idLeague}&season=${idSeason}`
        }

        fetch(url, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": type==="futbol"?"v3.football.api-sports.io":type==="basquet"?"v1.basketball.api-sports.io":"",
            "x-rapidapi-key": arrayIds[idApi]
            }
        })
        .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if(data.errors.rateLimit===undefined && data.errors.token===undefined && data.errors.requests===undefined){
                    setDataApi(data)
                }else{
                    fetchApi(setDataApi,idApi+1,arrayIds,calls+1,type,date,idLeague,idSeason,dataApi)
                }
            })
        .catch(err => {
            console.log(err);
        });
    }
}

