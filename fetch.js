function table(data) {

    if (!Array.isArray(data) ) {
        const text = document.createTextNode(data);
        const table = document.createElement("table");
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const root = document.querySelector('#root');
        td.appendChild(text)
        tr.appendChild(td);
        table.appendChild(tr);
        root.appendChild(table);
    } else {
        const text = data;
        const table = document.createElement('table');
        data.map((name,index)=>{
            
            
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            const node = document.createTextNode(name);
            td.appendChild(node);
            tr.appendChild(td);
            table.appendChild(tr);

        });
        console.log(table);
        const root = document.querySelector('#root');
        root.appendChild(table);
    }
    



}


const dataAPI = {
    url: "https://swapi.dev/api/",
    endpoints: {
        planets: "planets/",
        spaceships: "starships/",
        people: "people/"
    },
    getData: function (parameter, id) {
        if (id === undefined) {
            id = "";
        }
        const newdata = []
        const urlC = this.url + this.endpoints[parameter] + id
        async function getdata(url) {
            const data = await fetch(url, { method: "GET" });
            return data;
        }
        const myData = getdata(urlC).then((res) => {
            return res.json();
        }).then((data) => {
            if (id == "") {
                const result = data.results;
                const datset = result.map((planets) => {

                    // console.log(planets.name);
                   
                    return planets.name;
                    
                });
                console.log(datset)
                table(datset);
            } else {
                const result = data;
                // console.log(result.name);
                table(result.name);
            }

            
            


        });
        console.log(newdata);

        
    }
}

// async function getData() {
//     const data = await fetch(dataAPI.url + dataAPI.endpoints.planets, { method: "GET" })
//     return data;
// }
// getData().then((res) => {
//     return res.json();
// }).then((data) => {
//     const result = data.results;

//     result.map((planets) => {
//         console.log(planets.name);
//     });
// });;
dataAPI.getData("people");





