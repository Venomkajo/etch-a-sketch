var container = document.getElementById('container');

addPixels(16);

var gridPixels;

function addPixels(amount){
    for (let i = 0; i < amount; i++){

        var newPixel = document.createElement('div');
        newPixel.classList.add('pixel');
        newPixel.textContent = '0';
        newPixel.style.backgroundColor = 'white';

        container.append(newPixel);
    }

    gridPixels = document.querySelectorAll('.pixel');

    console.log(gridPixels);

}

