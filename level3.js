arr = [];
let btn_add = document.getElementById("additem");
let btn_delete = document.getElementById("deleted");

function get_update(){
    let title = document.getElementById('title').value;
    let desc = document.getElementById('description').value;
    arr.push([title, desc]);
    update();
}

function update(){   
    str ='';
    arr.forEach((element,index) => {
        str = str +
        `<tr>
        <td>${element[0]}</td>
        <td colspan="15"></td>
        <td>${element[1]}</td>
        <td colspan="25"></td>
        <td><button type="submit" class="submit-btn1" onclick="deleted(${index})"><i class="material-icons" style="font-size:48px;color:red">delete</i></button></td>
        </tr>`
    });
    document.getElementById("tableBody").innerHTML = str;
}

function deleted(item_index){
    arr.splice(item_index,1);
    console.log(arr);
    update();
}

btn_add.addEventListener("click", () => {
    get_update();   
});