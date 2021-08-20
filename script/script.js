function loaded() {
    let counter = 2;
    const counterShow = document.querySelector('.counter')
    allFloors = document.querySelectorAll('.home-img path');
    allFloors.forEach(i => {
        i.addEventListener('mouseover', () => chooseFloor(i));
    });

    function chooseFloor(item) {
        counter = item.getAttribute('data-floor');
        changeCurrentFloor();
    }
    document.querySelector('.counter-up').addEventListener('click', countUp)
    document.querySelector('.counter-down').addEventListener('click', countDown)

    function countUp() {
        if (counter < 18) {
            counter++;
            changeCurrentFloor();
        }
    }

    function countDown() {
        if (counter > 2) {
            counter--;
            changeCurrentFloor()
        }
    }

    function changeCurrentFloor() {
        allFloors.forEach(i => i.classList.remove('current-floor'));
        allFloors[counter - 2].classList.add('current-floor');
        counterShow.innerHTML = allFloors[counter - 2].getAttribute('data-floor');
    }
}


window.addEventListener('load', loaded)