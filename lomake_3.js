function test() {

  let ktunnus = document.getElementById("kayttajatunnus").value;
  let salasana = document.getElementById("salasana").value;
  console.log(ktunnus);
  console.log(salasana);      

  if (ktunnus === "jyri.lindroos@keuda.fi" && salasana === "salis") {
    alert("Tietosi on oikein"); 
  } else {
    alert("Tietosi on väärin");
  }
}
