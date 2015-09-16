function AddData(){

        var rows = "";
        var username = document.getElementById("username").value;
        var address = document.getElementById("address").value;
        var phone = document.getElementById("phone").value;

        rows += "<tr><td>" + username + "</td><td>" + address + "</td><td>" + phone + "</td><td>";
        $(rows).appendTo("#list tbody");

}

function ResetForm(){
    document.getElementById("myForm").reset();
}


function goBack(){
    window.history.back();
    ResetForm();
}