const randomToo = Math.floor(Math.random() * 100) + 1;
console.log(randomToo);
const utgaAwahFunkts = () => {
  const taasanToo = document.getElementById("taasanToo").value;
  const utga = document.getElementById("utga");
  console.log(taasanToo);

  if (randomToo == taasanToo) {
    utga.textContent = "bayr hurgey";
  } else if (randomToo > taasanToo) {
    utga.textContent = "arai baga baina";
  } else {
    utga.textContent = "arai ih baina";
  }
};