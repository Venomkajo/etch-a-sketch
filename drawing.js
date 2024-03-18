const columnSize = 16;
var container = document.getElementById('container');
var gridPixels;

addPixels(16);

addDrawing();

document.getElementById('gridSizeForm').addEventListener('submit', function(){
    event.preventDefault();

    let input = document.getElementById('newGridSize');
    input = input.value;

    if (input > -1 && input < 101){

        clearPixels();
        addPixels(input);
        addDrawing();
    }
    else{
        alert('Number must be from 0 to 100.')
    }

});

function addPixels(pixelAmount){
    for (let i = 0; i < pixelAmount; i++){

        var row = document.createElement('div');
        row.classList.add('row');

        container.append(row);

        for (let j = 0; j < pixelAmount; j++){

            var newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            newPixel.style.backgroundColor = 'white';
    
            row.append(newPixel);
        }
    }

}

function clearPixels(){
    rows = document.querySelectorAll('.row')

    rows.forEach(row => {
        container.removeChild(row);
    });
}

function addDrawing(){
    gridPixels = document.querySelectorAll('.pixel');

    gridPixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', function(){
            pixel.style.backgroundColor = 'black';
    })});
}