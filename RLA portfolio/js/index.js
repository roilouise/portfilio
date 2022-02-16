const tl = gsap.timeline({ default: { ease: "power.out1" } });

tl.to('.loader-text', { y: '0%', duration: 1, stagger: 0.1 });
tl.to('.slider', { x: '100%', duration: 1 });
tl.to('.loader', { x: '100%', duration: 1 }, '-=0.7');
tl.fromTo('nav', { y: '-100%', opacity: '0' },
   { y: '0%', opacity: '1', duration: 1 });
tl.fromTo('.pro-text', { opacity: '0', y: '30%', },
   { opacity: '1', y: '0%', duration: 1 }, '-=1');
tl.fromTo('.propic-wrapper', { visibility: 'hidden' },
   { visibility: 'visible', duration: 1 }, '-=01');
// tl.to('body', { overflowY: 'auto' });
// let hover = document.querySelector('.grad-text');
// let display = document.querySelector('.grad-pic');
