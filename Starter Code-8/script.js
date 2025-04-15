//step 1
document.addEventListener('DOMContentLoaded', () => {
    //step 2
    const boxContainer = document.querySelector('#box-container');
    const newBoxButton = document.querySelector('#new-box-button');
    const colorForm = document.querySelector('#color-form');
    const colorInput = document.querySelector('#color-input');

    //step 3
    let boxColorStr = '';
    let boxIDNumber = 0;

    //step 4
    colorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //colorInput.blur();
        boxColorStr = colorInput.value;
        console.log(boxColorStr);
    });

    //step 5
    newBoxButton.addEventListener('click', (event) => {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.style.backgroundColor = boxColorStr;
        boxContainer.append(newBox);
    });
}); 