let result = 0;
let submit = document.querySelector("#button");
submit.addEventListener('click', () => {
    let a1 = document.querySelector("#a1").value;
    a1 === "120" ?  result++ : result;
    let a2 = document.querySelector("#a2").value;
    a2 === "22" ?  result++ : result;
    let a3 = document.querySelector("#a3").value;
    a3 === "18" ?  result++ : result;
    let a4 = document.querySelector("#a4").value;
    a4 === "4" ?  result++ : result;
    let a5 = document.querySelector("#a5").value;
    a5 === "3" ?  result++ : result;
    alert(result);
    result = 0;
})