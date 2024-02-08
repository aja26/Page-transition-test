
function pageTransitions(){
    let tl = gsap.timeline();

    tl.to(".transition", {
        duration: 1,
        scaleY: 1,
        transformOrigin: "bottom",
        ease: 'power4.inOut',
    })

    tl.to(".transition", {
        duration: 1,
        scaleY: 0,
        transformOrigin: "top",
        ease: 'power4.inOut',
        delay: 0.2,
    })
}

function contentAnimation() {
    let tl = gsap.timeline();

    tl.to("h1", {
        top: 0,
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.75,
    })
}

function contentAnimation2(){
    let tl = gsap.timeline();
    tl.to('.img-reveal', {
        top: 600,
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.85,  
    })
}

function delay(n){
    n = n || 0;
    return new Promise((done) =>{
        setTimeout(() => {
            done();
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data){
                const done = this.async();

                pageTransitions();
                await delay(1000);
                done();
            },
            // change page
            async enter(data){
                contentAnimation2();
                 contentAnimation();
                
            },
            // page refesh
            async once(data){
                contentAnimation();
                contentAnimation2();
            },
        }
    ]
})