//Ejercicio 1

let cities = ["miami", "barcelona", "madrid"];

const capCities = cities.map(e=> 
  e.charAt(0).toUpperCase()+ e.slice(1));

console.log(capCities);

//Ejercicio 2

const finalGrades = students.map(function(elem) {
  let projectsAvg = (elem.firstProject + elem.secondProject)/2;
  let finalGrade  = elem.finalExam*0.6 + projectsAvg*0.4;
  return {
    name: e.name,
    finalGrade: Math.round(finalGrade)
  }
})

//Ejercicio 3

 let averageCalories=menu.reduce(
  (sum,food,i,a) => {
    console.log("accumulator is: ", sum, "and current value is: ", food.calories);
    return sum+food.calories/a.length}
,0)


console.log(averageCalories);

//Ejercicio 3.bis Filtra los elemntos con indice calórico superior a la media

let overCalorics= menu.filter(e => e.calories>averageCalories);
console.log(overCalorics);

//Ejercicio 4


let avgRate = product.reviews.reduce(function(p,c,i,a){return p + (c.rate/a.length)},0);
console.log(avgRate);

//Ejercicio 4.bis Filtra los comentarios de mayor a  menor rate

product.reviews.sort((a,b) => a.rate - b.rate);

console.log(product.reviews);

//Bonus: Pintar estrellitas de valoración
//index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">

    <title>Document</title>
</head>
<body>
    <div class="imagen"></div>
   

    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>

    <script src="stars.js"></script>
</body>
</html>

//style.scss
.imagen{
    background: white url("https://picsum.photos/id/237/200/300") no-repeat;
    background-size: contain;
    width: 100vw;
    height:30vh;
}

.checked{
    color: orange;
}

//stars.js
  function pintarEstrellitas(){
      let stars = document.getElementsByClassName('fa-star');

      for(i=0; i<Math.round(avgRate);i++){
          stars[i].classList.add('checked');
      }
  }

  onload = pintarEstrellitas;


