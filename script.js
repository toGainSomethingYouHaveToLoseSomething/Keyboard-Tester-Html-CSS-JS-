const buttons = document.querySelectorAll('.key-btn')

// console.log(buttons)

buttons.forEach(btn => {
    btn.addEventListener('click',(event)=>{
        // console.log(this.KeyboardEventa)
    })
});

document.addEventListener('keydown',(event)=>{
    event.preventDefault()
    console.log(event.key)
    console.log(event)
})

// document.addEventListener('click',(event)=>{
//     console.log(event)
// } )

// document.addEventListener('contextmenu',(event)=>{
//     console.log(event)
// })