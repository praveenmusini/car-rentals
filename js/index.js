gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true, 
        pinSpacing: false,
    });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
        let panelStarts = tops.map(st => st.start),
        snapScroll = gsap.utils.snap(panelStarts, self.scroll());
        return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); 
    },
    duration: 0.5
  }
});