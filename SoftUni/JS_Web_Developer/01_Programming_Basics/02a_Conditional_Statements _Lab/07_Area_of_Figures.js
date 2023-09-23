function areaOfFigures(input){
    let figure = input[0];

    if (figure == "square"){
        side_a = Number(input[1]);
        area = side_a * side_a;
    } else if (figure == "rectangle"){
        side_a = Number(input[1]);
        side_b = Number(input[2]);
        area = side_a * side_b;
    } else if (figure == "circle"){
        radius = Number(input[1]);
        area = Math.PI * radius * radius;
    } else if (figure == "triangle"){
        side_a = Number(input[1]);
        height_a = Number(input[2]);
        area = side_a * height_a * 0.5;
    }
    console.log(area.toFixed(3))
}

