function  showPass(){

    var x = document.getElementById("pass");

    if (x.type === "password"){

        x.type = "text";

    }else{

        x.type = "password";

    }

}

function add(){
    
    document.getElementById("addManage").style.height ="40%";
    document.getElementById("edit").style.visibility = "hidden";
    document.getElementById("add").style.visibility = "visible";
    
}

function edit(){
    
    document.getElementById("addManage").style.height ="60%";
    document.getElementById("add").style.visibility = "hidden";
    document.getElementById("edit").style.visibility = "visible";
    
}