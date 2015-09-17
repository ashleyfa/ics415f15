window.onload = codeAddress;

function AddData(form_data){
    var table = document.getElementById('list');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    var username;
    var address;
    var phone;

    var i;
    var searchString = window.location.search.substring(1);
    var params = searchString.split("&");

    var val;
    for (i=0;i<params.length;i++) {
        if(params[i].substring(0,4) == "name"){
            username = params[i].substring(5, params[i].length);

        }
        else if(params[i].substring(0,7) == "address"){
            address = params[i].substring(8, params[i].length);
        }
        else if(params[i].substring(0,5) == "phone"){
            phone = params[i].substring(6, params[i].length);
        }
    }


    td1.innerHTML = username;
    td2.innerHTML = address;
    td3.innerHTML = phone;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    console.log(table.children[0].appendChild(row));

}


function ResetForm(){
    document.getElementById("myForm").reset();
}

function goBack(){
    window.history.back();
    ResetForm();
}
function changeText(id){
    id.innerHTML = "Hello!";
}

function codeAddress(){
    var form_data = window.location.search.substring(1);
    AddData(form_data);
}

function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    if (x == null || x == "") {
        alert("username must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["address"].value;
    if (y == null || y == "") {
        alert("address must be filled out");
        return false;
    }
    var z = document.forms["myForm"]["phone"].value;
    if (isNaN(z)) {
        alert("address must be filled out");
        return false;
    }
    return true;
}