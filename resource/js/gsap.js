document.addEventListener("DOMContentLoaded", (event) => {
    gsap.to(".box1-1", {
        duration: 3, x: 200, opacity: 0.2, ease: 'steps(10)', delay: 2,
    });
    gsap.to(".box1-2", {
        duration: 3, x: 200, rotate: 720, scale: 1.3, delay: 0.5,
    })
    gsap.to(".box1-3", {
        duration: 3, x: 200, backgroundColor: 'red', width: 300, fontSize: 60, ease: 'elastic', delay: 0.5,
    })

    // ==========================================================================

    gsap.from(".box2-1", {
        x: 300, opacity: 0.3, duration: 3, scale: 0.3
    });
    gsap.fromTo(".box2-2", {
        fontSize: 30,
    }, 
    {
        backgroundColor: 'green', x: 300, width: 400, fontSize: 16, duration: 3,
    });
    gsap.set(".box2-3", {
        x: 100, width: 200, backgroundColor: 'skyblue',
    });

    // ==========================================================================
    
    var tween = gsap.to(".box3-1", {
        duration: 5, x: 500, width: 500, paused: true,
    });

    document.querySelector("#play").addEventListener('click', function() {
        return tween.play();
    });
    document.querySelector("#pause").addEventListener('click', function() {
        return tween.pause();
    });


    var resumBtn = document.querySelector("#resume");

    function resume () {
        return tween.resume();
    };

    resumBtn.addEventListener('click', resume);


    var reverseBtn = document.querySelector("#reverse");

    reverseBtn.addEventListener('click', function(){
        return tween.reverse();
    });

    document.querySelector("#restart").onclick = function() { return tween.restart(); }
});