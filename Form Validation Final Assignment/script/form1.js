function Validation() {
    var name = document.getElementById("name");
    var fathername = document.getElementById("fathername");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    var mobilenum = document.getElementById("mobnum");
    var alert = document.getElementById("alert");
    var alert1 = document.getElementById("alert1");
    var alert2 = document.getElementById("alert2");
    var alert3 = document.getElementById("alert3");
    var alert4 = document.getElementById("alert4");

    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    alert.innerHTML = "";
    alert1.innerHTML = "";
    alert2.innerHTML = "";
    alert3.innerHTML = "";
    alert4.innerHTML = "";
    name.style.border = "1px solid black";
    fathername.style.border = "1px solid black";
    email.style.border = "1px solid black";
    dob.style.border = "1px solid black";
    mobilenum.style.border = "1px solid black";

    if (name.value.trim() == "") {
        alert.innerHTML = "field is required";
        alert.style.color = "red";
        name.style.border = "1px solid red";

    }
    if (fathername.value.trim() == "") {
        alert1.innerHTML = "field is required";
        alert1.style.color = "red";
        fathername.style.border = "1px solid red";

    }
    if (email.value.trim() == "") {
        alert2.innerHTML = "field is required";
        alert2.style.color = "red";
        email.style.border = "1px solid red";
    }
    if (regex.test(email.value)) {
        alert2.innerHTML = "";

    }
    else {
        alert2.innerHTML = "invalid";
        alert2.style.color = "red";

    }

    var regex1 = /^[0-9]{2}-[0-9]{2}-[0-9]{4}/;
    if (dob.value.trim() == "") {
        alert3.innerText = "field is required";
        alert3.style.color = "red";
        dob.style.border = "1px solid red";
    }
    if (regex1.test(dob.value)) {
        alert3.innerHTML = "";
    }
    else {
        alert3.innerHTML = "invalid";
        alert3.style.color = "red";
    }

    var regex2 = /^[6-9]{1}[0-9]{9}$/;
    if (mobilenum.value.trim() == "") {
        alert4.innerHTML = "field is required";
        alert4.style.color = "red";
        mobilenum.style.border = "1px solid red";
    }
    if (regex2.test(mobilenum.value)) {
        alert4.innerHTML = "";
    }
    else {
        alert4.innerHTML = "invalid";
        alert4.style.color = "red";
    }
}



function Checked() {
    var radio = document.getElementById("radio");
    var address3 = document.getElementById("addressln1");
    var address4 = document.getElementById("addressln2");
    var select1 = document.getElementById("select1");
    var pincode1 = document.getElementById("pincode1");
    var city1 = document.getElementById("city1");
    var address1 = document.getElementById("address1");
    var address2 = document.getElementById("address2");
    var city = document.getElementById("city");
    var pincode = document.getElementById("pincode");
    var select = document.getElementById("select");
    var alert5 = document.getElementById("alert5");
    var alert6 = document.getElementById("alert6");
    var alert7 = document.getElementById("alert7");
    var alert8 = document.getElementById("alert8");
    var alert9 = document.getElementById("alert9");

    var regex3 = /^[6]\d{5}/;
    alert5.innerHTML = "";
    alert6.innerHTML = "";
    alert7.innerHTML = "";
    alert8.innerHTML = "";
   
    address1.style.border = "1px solid black";
    address2.style.border = "1px solid black";
    city.style.border = "1px solid black";
    pincode.style.border = "1px solid black";

    if (address1.value.trim() == "") {
        alert5.innerHTML = "required field";
        alert5.style.color = "red";
        address1.style.border = "1px solid red";
    }
    if (address2.value.trim() == "") {
        alert6.innerHTML = "required field";
        alert6.style.color = "red";
        address2.style.border = "1px solid red";
    }
    if (city.value.trim() == "") {
        alert7.innerHTML = "required field";
        alert7.style.color = "red";
        city.style.border = "1px solid red";
    }

    if (radio.checked) {
        if (regex3.test(pincode.value)) {
            address3.value = address1.value;
            address4.value = address2.value;
            city1.value = city.value;
            select1.value = select.value;
            pincode1.value = pincode.value;
        }
        else {
            alert8.innerHTML = "please fill a valid pincode";
            alert8.style.fontSize = "small";
            alert8.style.color = "red";
            pincode.style.border = "1px solid red";
        }
    }
    else {
        alert9.innerHTML = "Please fill the fields";
        alert9.style.color = "red";
        alert9.style.fontSize = "small";
    }
}