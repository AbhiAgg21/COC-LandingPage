const sr = ScrollReveal({
    distance: '65px',
    duration:2600,
    delay:450,
    reset:true
});

sr.reveal('.herotext',{delay:200, origin: 'top'})
sr.reveal('.heroimg',{delay:300, origin: 'top'})
sr.reveal('.navlist',{delay:100, origin: 'right'})
sr.reveal('.logo',{delay:150, origin: 'left'})
sr.reveal('.icons>a',{delay: 500, origin: 'left'});
sr.reveal('.scrolldown>a',{delay: 250, origin: 'right'});