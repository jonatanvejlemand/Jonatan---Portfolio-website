
var target1 = document.getElementById('target-1'); 
var target2 = document.getElementById('target-2'); 
var target3 = document.getElementById('target-3'); 
var target4 = document.getElementById('target-4'); 
var target5 = document.getElementById('target-5'); 
var target6 = document.getElementById('target-6'); 
var target7 = document.getElementById('target-7'); 
var target8 = document.getElementById('target-8'); 
var target9 = document.getElementById('target-9'); 
var target10 = document.getElementById('target-10');  

var points = 0;
var lives = 3;
var timeInSek = 15;

var displayPoints = document.getElementById('target-point'); 
var displayLives = document.getElementById('target-life'); 
var displayTime = document.getElementById('target-time');  

var modalStart = document.getElementById('modal-start'); 
var modalComplete = document.getElementById('modal-complete');  
var modalFail = document.getElementById('modal-fail');  

var startGame = document.getElementById('start-game');  
var startGame2 = document.getElementById('start-game-2');  
var startGame3 = document.getElementById('start-game-3');  

var intervalTarget1;
var intervalTarget2;
var intervalTarget3;
var intervalTarget4;
var intervalTarget5;
var intervalTarget6;
var intervalTarget7;
var intervalTarget8;
var intervalTarget9;
var intervalTarget10;
var timeInterval;

// buttons
startGame.addEventListener('click', function() {
    initGame();
})

startGame2.addEventListener('click', function() {
    initGame();
})

startGame3.addEventListener('click', function() {
    initGame();
})

// targets

target1.addEventListener('click', function() {
    if(target1.classList.contains('positive')) {
        getPoints();
        target1.classList.add('hit');
    } else {
        removeLife();
        target1.classList.add('hit');
    }
})

target2.addEventListener('click', function() {
    if(target2.classList.contains('positive')) {
        getPoints();
        target2.classList.add('hit');
    } else {
        removeLife();
        target2.classList.add('hit');
    }
})

target3.addEventListener('click', function() {
    if(target3.classList.contains('positive')) {
        getPoints();
        target3.classList.add('hit');
    } else {
        removeLife();
        target3.classList.add('hit');
    }
})

target4.addEventListener('click', function() {
    if(target4.classList.contains('positive')) {
        getPoints();
        target4.classList.add('hit');
    } else {
        removeLife();
        target4.classList.add('hit');
    }
})

target5.addEventListener('click', function() {
    if(target5.classList.contains('positive')) {
        getPoints();
        target5.classList.add('hit');
    } else {
        removeLife();
        target5.classList.add('hit');
    }
})

target6.addEventListener('click', function() {
    if(target6.classList.contains('positive')) {
        getPoints();
        target6.classList.add('hit');
    } else {
        removeLife();
        target6.classList.add('hit');
    }
})

target7.addEventListener('click', function() {
    if(target7.classList.contains('positive')) {
        getPoints();
        target7.classList.add('hit');
    } else {
        removeLife();
        target7.classList.add('hit');
    }
})

target8.addEventListener('click', function() {
    if(target8.classList.contains('positive')) {
        getPoints();
        target8.classList.add('hit');
    } else {
        removeLife();
        target8.classList.add('hit');
    }
})

target9.addEventListener('click', function() {
    if(target9.classList.contains('positive')) {
        getPoints();
        target9.classList.add('hit');
    } else {
        removeLife();
        target9.classList.add('hit');
    }
})
target10.addEventListener('click', function() {
    if(target10.classList.contains('positive')) {
        getPoints();
        target10.classList.add('hit');
    } else {
        removeLife();
        target10.classList.add('hit');
    }
})


function getPoints() {
    points = points + 1;
    displayPoints.innerHTML = points;
}

function removeLife() {
    if(lives == 1) {
        clearAllIntervals();
        resetGame();
        modalFail.classList.add('show');
    } else {
        lives = lives - 1;
        displayLives.innerHTML = lives;
    }
}

function initGame() {
    modalStart.classList.remove('show');
    modalFail.classList.remove('show');
    modalComplete.classList.remove('show');
    timeInSek = 15;
    time();
    startTargets();
}

function clearAllIntervals() {
    clearInterval(timeInterval);
    clearInterval(intervalTarget1);
    clearInterval(intervalTarget2);
    clearInterval(intervalTarget3);
    clearInterval(intervalTarget4);
    clearInterval(intervalTarget5);
    clearInterval(intervalTarget6);
    clearInterval(intervalTarget7);
    clearInterval(intervalTarget8);
    clearInterval(intervalTarget9);
    clearInterval(intervalTarget10);
}

function time() {
    timeInterval = setInterval(function() {
        timeInSek = timeInSek - 1;
        displayTime.innerHTML = timeInSek;
        if(timeInSek === 0) {
            result()
        }
    }, 1000);
}

function result() {
    if(points > 9) {
        modalComplete.classList.add('show');
    } else {
        modalFail.classList.add('show');
    }
    clearAllIntervals();
    resetGame();
}

function startTargets() {
    target1func();
    target2func();
    target3func();
    target4func();
    target5func();
    target6func();
    target7func();
    target8func();
    target9func();
    target10func();
}


function resetGame() {
            points = 0;
            lives = 3;
            displayLives.innerHTML = lives;
            displayTime.innerHTML = 15;
            displayPoints.innerHTML = points;
            target1.classList.remove('active')
            target1.classList.remove('positive')
            target1.classList.remove('negative')
            target1.classList.remove('hit')
            target1.classList.add('positive')

            target2.classList.remove('active')
            target2.classList.remove('positive')
            target2.classList.remove('negative')
            target2.classList.remove('hit')
            target2.classList.add('negative')

            target3.classList.remove('active')
            target3.classList.remove('positive')
            target3.classList.remove('negative')
            target3.classList.remove('hit')
            target3.classList.add('positive')

            target4.classList.remove('active')
            target4.classList.remove('positive')
            target4.classList.remove('negative')
            target4.classList.remove('hit')
            target4.classList.add('negative')


            target5.classList.remove('active')
            target5.classList.remove('positive')
            target5.classList.remove('negative')
            target5.classList.remove('hit')
            target5.classList.add('positive')

            target6.classList.remove('active')
            target6.classList.remove('positive')
            target6.classList.remove('negative')
            target6.classList.remove('hit')
            target6.classList.add('positive')

            target7.classList.remove('active')
            target7.classList.remove('positive')
            target7.classList.remove('negative')
            target7.classList.remove('hit')
            target7.classList.add('positive')

            target8.classList.remove('active')
            target8.classList.remove('positive')
            target8.classList.remove('negative')
            target8.classList.remove('hit')
            target8.classList.add('negative')

            target9.classList.remove('active')
            target9.classList.remove('positive')
            target9.classList.remove('negative')
            target9.classList.remove('hit')
            target9.classList.add('positive')

            target10.classList.remove('active')
            target10.classList.remove('positive')
            target10.classList.remove('negative')
            target10.classList.remove('hit')
            target10.classList.add('positive')
}

function target1func() {
    intervalTarget1 = setInterval(function() {   
        if(target1.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target1.classList.remove('active')
            target1.classList.remove('positive')
            target1.classList.remove('negative')
            target1.classList.remove('hit')
            if(randomNumber > 5 ) {
                target1.classList.add('negative')
            } else  {
                target1.classList.add('positive')
            }

        } else {
            target1.classList.add('active')
        }
    }, 1000);
}


function target2func() {
    intervalTarget2 = setInterval(function() {   
        if(target2.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target2.classList.remove('active')
            target2.classList.remove('positive')
            target2.classList.remove('negative')
            target2.classList.remove('hit')
            if(randomNumber > 5 ) {
                target2.classList.add('negative')
            } else  {
                target2.classList.add('positive')
            }

        } else {
            target2.classList.add('active')
        }
    }, 1500);
}


function target3func() {
    intervalTarget3 = setInterval(function() {   
        if(target3.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target3.classList.remove('active')
            target3.classList.remove('positive')
            target3.classList.remove('negative')
            target3.classList.remove('hit')
            if(randomNumber > 5 ) {
                target3.classList.add('negative')
            } else  {
                target3.classList.add('positive')
            }

        } else {
            target3.classList.add('active')
        }
    }, 763);
}

function target4func() {
    intervalTarget4 = setInterval(function() {   
        if(target4.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target4.classList.remove('active')
            target4.classList.remove('positive')
            target4.classList.remove('negative')
            target4.classList.remove('hit')
            if(randomNumber > 5 ) {
                target4.classList.add('negative')
            } else  {
                target4.classList.add('positive')
            }

        } else {
            target4.classList.add('active')
        }
    }, 2300);
}

function target5func() {
    intervalTarget5 = setInterval(function() {   
        if(target5.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target5.classList.remove('active')
            target5.classList.remove('positive')
            target5.classList.remove('negative')
            target5.classList.remove('hit')
            if(randomNumber > 5 ) {
                target5.classList.add('negative')
            } else  {
                target5.classList.add('positive')
            }

        } else {
            target5.classList.add('active')
        }
    }, 765);
}

function target6func() {
    intervalTarget6 = setInterval(function() {   
        if(target6.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target6.classList.remove('active')
            target6.classList.remove('positive')
            target6.classList.remove('negative')
            target6.classList.remove('hit')
            if(randomNumber > 5 ) {
                target6.classList.add('negative')
            } else  {
                target6.classList.add('positive')
            }

        } else {
            target6.classList.add('active')
        }
    }, 930);
}


function target7func() {
    intervalTarget7 = setInterval(function() {   
        if(target7.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target7.classList.remove('active')
            target7.classList.remove('positive')
            target7.classList.remove('negative')
            target7.classList.remove('hit')
            if(randomNumber > 5 ) {
                target7.classList.add('negative')
            } else  {
                target7.classList.add('positive')
            }

        } else {
            target7.classList.add('active')
        }
    }, 1120);
}

function target8func() {
    intervalTarget8 = setInterval(function() {   
        if(target8.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target8.classList.remove('active')
            target8.classList.remove('positive')
            target8.classList.remove('negative')
            target8.classList.remove('hit')
            if(randomNumber > 5 ) {
                target8.classList.add('negative')
            } else  {
                target8.classList.add('positive')
            }

        } else {
            target8.classList.add('active')
        }
    }, 1630);
}


function target9func() {
    intervalTarget9 = setInterval(function() {   
        if(target9.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target9.classList.remove('active')
            target9.classList.remove('positive')
            target9.classList.remove('negative')
            target9.classList.remove('hit')
            if(randomNumber > 5 ) {
                target9.classList.add('negative')
            } else  {
                target9.classList.add('positive')
            }

        } else {
            target9.classList.add('active')
        }
    }, 1920);
}

function target10func() {
    intervalTarget10 = setInterval(function() {   
        if(target10.classList.contains('active')) {
            var randomNumber = Math.floor(Math.random() * 11);
            target10.classList.remove('active')
            target10.classList.remove('positive')
            target10.classList.remove('negative')
            target10.classList.remove('hit')
            if(randomNumber > 5 ) {
                target10.classList.add('negative')
            } else  {
                target10.classList.add('positive')
            }

        } else {
            target10.classList.add('active')
        }
    }, 2500);
}