/*
    Ejercicio 1
    -----------
    Dada un array de nombre de ciudades,
    devolver un array con la primera letra
    de cada ciudad en mayúsculas.
*/
function ejercicio1() {
    let cities = ["miami", "barcelona", "madrid"];
    //cities = cities.map((elem) => elem.replace(/^./g, elem.charAt(0).toUpperCase()));
    cities = cities.map((elem) => elem.charAt(0).toUpperCase());
    console.log("Ejercicio 1. Cities: ", cities);
}

/* 
    Ejercicio 2
    -----------
    Imaginad que sois profesores y queréis calificar a los
    estudiantes en función de sus resultados en 2 proyectos
    (40% de la nota final) y el examen final (60% de la nota final).
    La información de partida es la siguiente:
    
    > El resultado se presentará como un array de objetos con
      dos campos name y final_grade.
*/

function ejercicio2() {
    let students = [
        {
            name: "Tony Parker",
            firstProject: 80,
            secondProject: 75,
            finalExam: 90
        },
        {
            name: "Marc Barchini",
            firstProject: 84,
            secondProject: 65,
            finalExam: 65
        },
        {
            name: "Claudia Lopez",
            firstProject: 45,
            secondProject: 95,
            finalExam: 99
        },
        {
            name: "Alvaro Briattore",
            firstProject: 82,
            secondProject: 92,
            finalExam: 70
        },
        {
            name: "Isabel Ortega",
            firstProject: 90,
            secondProject: 32,
            finalExam: 85
        },
        {
            name: "Francisco Martinez",
            firstProject: 90,
            secondProject: 55,
            finalExam: 78
        },
        {
            name: "Jorge Carrillo",
            firstProject: 83,
            secondProject: 77,
            finalExam: 90
        },
        {
            name: "Miguel López",
            firstProject: 80,
            secondProject: 75,
            finalExam: 75
        },
        {
            name: "Carolina Perez",
            firstProject: 85,
            secondProject: 72,
            finalExam: 67
        },
        {
            name: "Ruben Pardo",
            firstProject: 89,
            secondProject: 72,
            finalExam: 65
        }
    ]

    let resultado = [{}];

    students.map(
        (elem) =>
            resultado.push({
                name: elem.name,
                final_grade: (((elem.firstProject + elem.secondProject) / 2 * 0.4) + (elem.finalExam * 0.6)).toFixed(2)
            }));

    console.log("Ejercicio 2. Resultado: ", resultado);
}

/*
    Ejercicio 3
    -----------
    Dado un menu de alimentos con sus calorías calcula la media de calorías de todo el menú.

    Los datos de partida son:
*/

function ejercicio3() {
    let menu = [
        { name: "Carrots", calories: 150 },
        { name: "Steak", calories: 350 },
        { name: "Broccoli", calories: 120 },
        { name: "Chicken", calories: 250 },
        { name: "Pizza", calories: 520 }
    ];

    let resultado = menu.map((e) => e.calories).reduce(((acc, current) => acc + current), 0) / menu.length;

    console.log("Ejercicio 3. Menu ", resultado);
}

/*
    Ejercicio 4
    -----------

    Estamos desarrollando nuestro super e-commerce, cada producto tiene comentarios de
    usuario y una puntuación almacenada en un array con el nombre de reviews.
    Cada review tiene la siguiente estructura:

    Queremos mostrar el producto en nuestra web pero no queremos mostrar todos
    los comentarios de primera vista. Sólo necesitamos la valoración media
    para que los clientes se hagan una idea rápida de la valoración del producto.
*/

function ejercicio4(show) {
    let product = {
        name: "JIM'S STORE 2 Bobina 10W Cargador Inalámbrico Titular Anti-Deslizamiento Diseño",
        price: 15.69,
        manufacturer: "JIM'S STORE",
        reviews:
            [
                {
                    user: "Pavel Nedved",
                    comments: "Muy contento",
                    rate: 4
                },
                {
                    user: "Alvaro Trezeguet",
                    comments: "No tiene carga rápida",
                    rate: 1
                },
                {
                    user: "David Recoba",
                    comments: "Excelente relación calidad/precio.",
                    rate: 5
                },
                {
                    user: "Maribel Romero",
                    comments: "Pocas prestaciones",
                    rate: 2
                },
                {
                    user: "Antonio Cano",
                    comments: "Materiales malos",
                    rate: 1
                },
            ]
    }

    let resultado = product.reviews.map((e) => e.rate).reduce(((acc, current) => acc + current), 0) / product.reviews.length;

    if (show) {
        console.log("Ejercicio 4. Valoración media ", resultado);
    }
    return resultado;
}

/*
    BONUS
    -----------

    Traslada la media a pintar "estrellas" de valoración
    en una página web con la imagen del producto.
*/

let posicion_estrellas = {
    "5": "0em",
    "4.5": "-12.8em",
    "4": "-1.2em",
    "3.5": "-14em",
    "3": "-2.5em",
    "2.5": "-15.3em",
    "2": "-3.7em",
    "1.5": "-16.5em",
    "1": "-4.9em",
    "0.5": "-17.7em",
    "0": "-6.1em",
};

function bonus() {

    // x.0 => x.0
    // x.1 => x.0
    // x.2 => x.0
    // x.3 => x.0
    // x.4 => x.0

    // x.5 => x.5
    // x.6 => x.5
    // x.7 => x.5
    // x.8 => x.5
    // x.9 => x.5

    // y.0 => y.0


    let original = ejercicio4(); // si quieres probar, apaga ejercicio4() y pásale el valor a probar
    let indice = Math.round(original);

    if (original % 1) {

        indice = (original - Math.floor(original)).toFixed(1);

        if (indice < 0.4) {
            indice = Math.floor(original) + 0.5;
        }
        else {
            indice = Math.ceil(original) - 0.5;
        }
    }

    let img_estrellas = document.getElementById("img_estrellas");
    img_estrellas.style.left = posicion_estrellas[indice];
}
