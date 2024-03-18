const rowSize = 16;
var container = document.getElementById('container');
var gridPixels;

addPixels(16);

gridPixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', function(){
        pixel.style.backgroundColor = 'black';
})});

function addPixels(pixelAmount){
    for (let i = 0; i < rowSize; i++){

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
    

    gridPixels = document.querySelectorAll('.pixel');

    console.log(gridPixels);

}

