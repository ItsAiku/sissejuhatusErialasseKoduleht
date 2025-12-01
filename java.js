// Kood on kirjutatud Aivar Alliku poolt ja inspiratsiooni on saadud sellisest õpetusest https://www.youtube.com/watch?v=7eE8xPyXSR4  
// java skript on mõeldud hiire jälgimist jäljendama efekti ringidega. 
// Kursor peaks jäljendama mängus olevat eset, milleks on ender pearl


// Hoiab hiire koordinaate
const coords = { x: 0, y: 0 };

// Valib kõik HTML elemendid, mille klass on "circle"
const circles = document.querySelectorAll(".circle");

// Värvide massiiv ringidele
const colors = [
  "#0e262b",
  "#123036", 
  "#163a41", 
  "#1a444c", 
  "#1e4e57",
  "#225862", 
  "#26526f", 
  "#2b4c7c", 
  "#303689", 
  "#362f96",
  "#3d28a3", 
  "#4521b0", 
  "#4d1abd", 
  "#5513ca", 
  "#5d0dd7",
  "#650ce0", 
  "#6d0ce9", 
  "#750cf2", 
  "#7d0cfb", 
  "#890df7",
  "#950ff3"
];

// Annab igale ringile algpositsiooni ja määrab sellele värvi
circles.forEach(function (circle, index) {
  circle.x = 0; // Custom property (mitte CSS), hoiab ringi viimast x-positsiooni
  circle.y = 0; // Sama mis üleval, kuid y jaoks
  circle.style.backgroundColor = colors[index % colors.length]; // Värvide korduv tsükkel
});

// Uuendab hiirekoordinatsioone igal hiireliigutusel
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
});

// Animeerib ringe nii, et need "järgivad" hiirt viitega (delay-efekt)
function animateCircles() {
  
  // Alustab viimastest hiirekoordinaatidest
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    // Asetab ringi (index 0 = kõige suurem ja lähim) hiire lähedusse
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    // Skaalab ringe järk-järgult väiksemaks
    circle.style.scale = (circles.length - index) / circles.length;
    
    // Salvestab selle ringi praeguse positsiooni, mida järgmine ring "järgib"
    circle.x = x;
    circle.y = y;

    // Leiab järgmise ringi – viimane ring kasutab ringi nr 0
    const nextCircle = circles[index + 1] || circles[0];

    // Loob sujuva ülemineku positsioonide vahel -> delay efekt
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  // Käivitab animatsiooni uuesti järgmise kaadri juures
  requestAnimationFrame(animateCircles);
}

// Käivitab animatsiooni
animateCircles();