let btn = document.getElementById("btn")

btn.addEventListener("click", convert)
function convert() {
    let dich = document.getElementById("dich").value
    let tien = document.getElementById("tien").value
    let nguon = document.getElementById("nguon").value
    let result = document.getElementById("result")
    if(dich == "vn" && nguon == "my"){
        result.innerHTML = `Result: ${tien * 23000}  VietNamDong`;
    }
    if(dich == "my" && nguon == "vn"){
        result.innerHTML = `Result: ${tien / 23000}  Usd`;
    }
}
