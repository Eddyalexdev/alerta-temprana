function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("contraseña") .value;

    if (user=="usuario" && pass=="1234"){
        window.location="add-school-admin.html";
    } else {
        alert("error")
    }

}