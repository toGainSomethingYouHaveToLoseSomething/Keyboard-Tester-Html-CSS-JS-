const buttons = document.querySelectorAll('.key-btn')
const mouse_left = document.querySelector('#mouse-left')
const mouse_right = document.querySelector('#mouse-right')
const mouse_wheel = document.querySelector('#mouse-wheel')
const sound = new Audio('./sounds/click-keyboard_short2_high.wav')

const pressedButtons = ['']

let isSound = true;

buttons.forEach(btn => {
    btn.addEventListener('click',(event)=>{
        const current_btn = event.target
        current_btn.classList.add('button-pressed')
        if(isSound) sound.play()
    })
});

document.addEventListener('keydown',(event)=>{
    event.preventDefault()
    const _id = event.code
    const current_btn = document.querySelector(`#${_id}`)
    current_btn.classList.add('button-pressed')
    if(isSound) sound.play()
})

document.addEventListener('click',(event)=>{
    mouse_left.classList.add('button-pressed')
} )

document.addEventListener('contextmenu',(event)=>{
    mouse_right.classList.add('button-pressed')
})

document.addEventListener('wheel',(event)=>{
    mouse_wheel.classList.add('button-pressed')
} )

function resetAllKeys(){
    buttons.forEach((btn)=>{
        btn.classList.remove('button-pressed')
    })
    setTimeout(() => {
        mouse_left.classList.remove('button-pressed')
    }, 10);
    
}

function toggleSound(sound_btn){
    if(isSound){
        sound_btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'
        isSound = false
    }
    else{
        sound_btn.innerHTML = '<i class="fa-solid fa-volume"></i>'
        isSound = true
    }
}