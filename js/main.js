const animspeed = 600

var tl = anime.timeline({
    easing: 'easeOutQuint',
    duration: animspeed * 5
});

tl.add({
    targets: '.mainlogo-i',
    scaleY: [
        { value: 0, duration: 0},
        { value: 1, duration: animspeed, delay: animspeed},
    ]
})

tl.add({
    targets: '.mainlogo-i-dot',
    scaleY: [
        { value: 0, duration: 0, easing: 'easeOutQuart'},
        { value: 1, duration: animspeed, delay: animspeed},
    ]
}, animspeed* 1)

tl.add({
    targets: '.mainlogo-t',
    scaleY: [
        { value: 0, duration: 0, easing: 'easeOutQuart'},
        { value: 1, duration: animspeed, delay: animspeed},
    ]
}, animspeed* 0.4)

tl.add({
    targets: '.mainlogo-t-line',
    scaleX: [
        { value: 0, duration: 0, easing: 'easeOutQuart'},
        { value: 1, duration: animspeed, delay: animspeed},
    ]
}, animspeed* 1.2)


tl.add({
    targets: '.mainlogo-text',
    width: [
        { value: 0, duration: 0},
        { value: "40rem", duration: animspeed * 1.3, delay: animspeed / 1},
    ],
    easing: 'easeInOutQuart',
    delay: function(el, i) { return i * 250 },
}, animspeed* 1.5)

tl.add({
    targets: '.mainlogo-svg g path',
    fill: [
        { value: "#000000", duration: 0},
        { value: "#ffffff", duration: animspeed * 4, delay: animspeed * 2},
    ],
    strokeDashoffset: [
        { value: anime.setDashoffset, duration: 0},
        { value: 0, duration: animspeed * 2, delay: animspeed},
    ],
    easing: 'easeOutQuart',
    duration: 1500,
    delay: function(el, i) { return i * 100 },
}, animspeed* 1.8)

  

