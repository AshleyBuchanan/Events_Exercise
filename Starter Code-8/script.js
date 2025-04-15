function runPayLoad() {
    //step 2
    const boxContainer = document.querySelector('#box-container');
    //const newBoxButton = document.querySelector('#new-box-button'); //<--not needed
    const colorForm = document.querySelector('#color-form');
    const colorInput = document.querySelector('#color-input');

    //step 3
    let boxColorStr = '';
    let boxIDNumber = 0;

    //step 4
    function setNewColor() {
        boxColorStr = colorInput.value;
    }

    colorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        setNewColor();
    });

    //step 5
    function createNewBox() {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.style.backgroundColor = boxColorStr;
        newBox.setAttribute('boxID', `${boxIDNumber++}`);
        newBox.textContent = newBox.getAttribute('boxID');
        return newBox;
    }

    //step 6
    document.addEventListener('click', (event) => {
        if (event.target.id === 'new-box-button') {
            const newBox = createNewBox();
            boxContainer.append(newBox);
        }
    });

    //step 7
    document.addEventListener('dblclick', (event) => {
        if (event.target.classList.contains('box')) {
            event.target.classList.add('fading-out');
            setTimeout(() => {
                event.target.remove();
            }, 500);
        }
    });

    //step 8
    document.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('box')) {
            const rect = event.target.getBoundingClientRect();
            event.target.classList.add('x-y-display');
            event.target.classList.remove('id-display');
            event.target.textContent = `x: ${rect.left}, y: ${rect.top}`;
        }
    });

    //step 9
    document.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('box')) {
            event.target.textContent = event.target.getAttribute('boxID');
            event.target.classList.add('id-display');
            event.target.classList.remove('x-y-display');
        }
    });

    //step 10
    window.addEventListener('keypress', (event) => {
        let inputActive = document.activeElement === colorInput;
        if (inputActive === false) {
            if (event.key === 'n' || event.key === 'N') {
                const newBox = createNewBox();
                boxContainer.append(newBox);
            }
        } else {
            //extra step because it made sense to me
            if (event.key === 'Enter') {
                setNewColor();
                const submitButton = colorForm.querySelector('button');
                if (submitButton) {
                    submitButton.classList.add('button-pressed');
                    setTimeout(() => {
                        submitButton.classList.remove('button-pressed');
                    }, 150);
                }
            }
        }
    });
}

//step 1
document.addEventListener('DOMContentLoaded', () => {
    runPayLoad();
});