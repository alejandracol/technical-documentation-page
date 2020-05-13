function showAnimationNameDemo(index, animationNameValue) {
    document.querySelector('.animation-name-demo').style.animationPlayState = 'running';
    document.querySelector('.animation-name-demo').style.animationName = animationNameValue;
    let dot = document.getElementsByClassName('animation-name-dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[index - 1].classList.add('active');
}

function showAnimationDurationDemo(index, animationDurationValue) {
    document.querySelector('.animation-duration-demo').style.animationPlayState = 'running';
    document.querySelector('.animation-duration-demo').style.animationDuration = animationDurationValue;
    let dot = document.getElementsByClassName('animation-duration-dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[index - 1].classList.add('active');
}

function showAnimationTimingFunctionDemo(index, animationTimingFunctionValue) {
    document.querySelector('.animation-timing-function-demo').style.animationPlayState = 'running';
    document.querySelector('.animation-timing-function-demo').style.animationTimingFunction = animationTimingFunctionValue;
    let dot = document.getElementsByClassName('animation-timing-function-dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[index - 1].classList.add('active');
}

function showAnimationDelayDemo(index, animationDelayValue) {
    let demo = document.querySelector('.animation-delay-demo');
    demo.style.display = 'none';
    demo.style.animationPlayState = 'running';
    demo.style.animationDelay = animationDelayValue;
    let dot = document.getElementsByClassName('animation-delay-dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[index - 1].classList.add('active');

    setTimeout(function () {
        demo.style.display = 'block';
    }, 30);
}

function showAnimationIterationCountDemo(index, animationIterationCountValue) {
    let demo = document.querySelector('.animation-iteration-count-demo');
    demo.style.display = 'none';
    demo.style.animationPlayState = 'running';
    demo.style.animationIterationCount = animationIterationCountValue;
    let dot = document.getElementsByClassName('animation-iteration-count-dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[index - 1].classList.add('active');

    setTimeout(function () {
        demo.style.display = 'block';
    }, 30);
}

function showAnimationDirectionDemo(index, animationDirectionValue) {
    document.querySelector('.animation-direction-demo').style.animationPlayState = 'running';
    document.querySelector('.animation-direction-demo').style.animationDirection = animationDirectionValue;
    let dot = document.getElementsByClassName('animation-direction-dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[index - 1].classList.add('active');
}

function showAnimationFillModeDemo(index, animationFillModeValue) {
    let demo = document.querySelector('.animation-fill-mode-demo');
    demo.style.display = 'none';
    demo.style.animationPlayState = 'running';
    demo.style.animationFillMode = animationFillModeValue;
    let dot = document.getElementsByClassName('animation-fill-mode-dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[index - 1].classList.add('active');

    setTimeout(function () {
        demo.style.display = 'block';
    }, 30);
}

function showAnimationPlayStateDemo(index, animationPlayStateValue) {
    document.querySelector('.animation-play-state-demo').style.animationPlayState = animationPlayStateValue;
    let dot = document.getElementsByClassName('animation-play-state-dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[index - 1].classList.add('active');
}

function showAnimationDemo(index, animationClass) {
    document.querySelector('.animation-demo').classList.remove('animation-1');
    document.querySelector('.animation-demo').classList.remove('animation-2');
    document.querySelector('.animation-demo').classList.remove('animation-3');
    document.querySelector('.animation-demo').classList.remove('animation-4');
    document.querySelector('.animation-demo').classList.add(animationClass);
    let dot = document.getElementsByClassName('animation-dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
    dot[index - 1].classList.add('active');
}
