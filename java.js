const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

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
]


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
