// name =
//capital = x[i].capital
//country codes =`x[i].alpha2Code , x[i].alpha3Code`
//rregiom = x[i].region
//flag url = x[i].flag


let makelayout = () => {
    let url = 'https://restcountries.eu/rest/v2/all'

    let f = fetch(url)
    f.then((result) => {
        return result.json()
    }).then((data) => {
        layout(data)
    }).catch((err) => {
        console.log(err)
    })
}
makelayout()

let layout = (x) =>{
    var m =0
    var sect  = document.getElementById('containerSect')
    for (let i=1; i<=63; i++)
    {
        var r=document.createElement("div");
        sect.appendChild(r);
        r.className="row";
        r.id = `row${i}`;
        var rid = document.getElementById(`row${i}`)

        var br = document.createElement('br')
        sect.appendChild(br)
        for (let j=0; j<4; j++)
        {
            var c=document.createElement("div");
            rid.appendChild(c);
            c.className="col-lg-3 col-md-6 col-sm-12";
            c.id = `col${j}`;
            var cid = document.querySelector(`#row${i} #col${j}`)

            cid.innerHTML = `
            <div class="card" style="width: 16rem; background-color:#eeeeee">
                <div class="card-body" style = "padding: 20px 0">
                    <div class ="padder">
                        <h5 class="card-title">${x[m].name}</h5>
                    </div>
                    <img src=${x[m].flag} class="card-img-top" alt="..." style = "width:100%;height: 10rem; margin-bottom: 10px">
                    <h5 class="card-title">Capital: ${x[m].capital}</h5>
                    <p class="card-text">Country Codes: ${x[m].alpha2Code} , ${x[m].alpha3Code}</p>
                    <p class="card-text">Region: ${x[m].region}</p>
                </div>
          </div>`
          m++
        }
    }
}


//name =
//