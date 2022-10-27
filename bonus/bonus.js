const arrImages = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg'];
    
    const eleSlider = document.querySelector('.slider');
    const eleBtnLeft = document.querySelector('.btn-left');
    const eleBtnRight = document.querySelector('.btn-right');
    
    // creo i tag immagine nell'html
    for (let i = 0; i < arrImages.length; i++) {
        const eleImg = document.createElement('img');
        eleImg.src = arrImages[i];
        eleImg.classList.add('slider-img');
    
        if (i === 0) {
            eleImg.classList.add('active');
        }
    
        eleSlider.append(eleImg);
    }
    
    const listEleImg = document.querySelectorAll('.slider-img'); 
    
    let activeIndex = 0;
    
    // aggiungo gli event listeners ai due bottoni
    eleBtnRight.addEventListener('click', function () {
        
        // tolgo la classe active dall'elemento attivo corrente
        listEleImg[activeIndex].classList.remove('active');
        
        activeIndex++;
        if(activeIndex===listEleImg){
            activeIndex= 0;  
        }

        
        // aggiungo la classe active all'elemento successivo
        listEleImg[activeIndex].classList.add('active');

        
    
    });
    
    eleBtnLeft.addEventListener('click', function () {
        // tolgola classe active dall'elemento attivo corrente
        listEleImg[activeIndex].classList.remove('active');
        if(activeIndex===0){
            activeIndex= listEleImg-1;  
        }else{
            activeIndex--;
        }

        // aggiungo la classe active all'elemento successivo
        listEleImg[activeIndex].classList.add('active');
        
    });
    
    
    
    
    