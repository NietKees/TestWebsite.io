const apikey = '403886da';


async function search(){

    let result;

    const query = document.getElementById("toBeAdded").value;
    const url = `https://www.omdbapi.com/?apikey=${apikey}&t=${query}`

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(response.ok){
        document.getElementById("result").innerHTML = data.Title + "<br>" + data.Year;
        addNewItem(data.Title);       
    }

}



function addNewItem(toBeAdded) {
    //let toBeAdded = document.getElementById("toBeAdded").value;
    let movieList = document.getElementById("movieList");
    let li = document.createElement("li");
    let text = document.createTextNode(toBeAdded);
    li.appendChild(text);
    movieList.appendChild(li);
    document.getElementById('toBeAdded').value = "";
}