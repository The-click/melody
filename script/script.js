function loaded() {
    let counter = 2;
    const counterShow = document.querySelector('.counter')
    allFloors = document.querySelectorAll('.home-img path');
    allFloors.forEach(i => {
        i.addEventListener('mouseover', () => chooseFloor(i));
    });

    // Choose flat
    const flatsLink = document.querySelectorAll('.flat-link');
    const flatsPath = document.querySelectorAll('.flats path');
    flatsLink.forEach((item, index) => item.addEventListener('mouseover', () => chooseFlat(index)))
    flatsPath.forEach((item, index) => item.addEventListener('mouseover', () => chooseFlat(index)))

    function chooseFlat(i) {

        document.querySelectorAll('.choose-flat').forEach((item) => item.classList.remove('choose-flat'));
        flatsLink[i].classList.add('choose-flat');
        flatsPath[i].classList.add('choose-flat');


    }
    // 



    const modalCounter = document.querySelector('.modal-counter');


    // open modal flats
    const buttonOpenSum = document.querySelector('.button-summary');
    const buttonCloseSum = document.querySelector('.modal-close');
    const modalFlats = document.querySelector('.modal');
    buttonOpenSum.addEventListener('click', toggleModalFlats);
    buttonCloseSum.addEventListener('click', toggleModalFlats);

    function toggleModalFlats() {
        modalFlats.classList.toggle('is-open');
        modalCounter.innerHTML = allFloors[counter - 2].getAttribute('data-floor');;
    }
    // 

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