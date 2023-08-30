let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
    myExtras.shift()
    myExtras.push(myExtrasInput.value)
    console.log(myExtras);
    updateExtras();
    /* din map kode her... */
}



function updateExtras() {
    let extraText = myExtras.map((x) =>{
        return x;
    })
    let list = document.createElement("li");
    let item = document.createTextNode(extraText);
    list.appendChild(item); // l
    myExtrasListElement.appendChild(list);


    // console.log(extraText);



    /* din map kode her... */


}






