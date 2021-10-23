
let currentFloor = 1
let btnUp = $('#btn-up')
let btnDown = $('#btn-down')
let lift = $('.lift')
let posLift = 450
let btn14 = $('#14')
lift.css({transition: '1s'})
function goUp(){
    currentFloor++
    (`Вы не можете подняться выше ${this.btnUp}`)
    posLift-=30
    lift.css({top: posLift})
}
function goDown() {
    currentFloor--
    posLift += 30
    lift.css({ top: posLift })
}
btnUp.on('click', goUp)
btnDown.on('click', goDown)

// btn14.on('click', function(){
//     if(currentFloor<14){
//         while(currentFloor<14){
//             goUp()
//             console.log('qwe')
//         }
//     }else{
//         while (currentFloor > 14) {
//             goDown()
//             console.log('qwe')
//         }
//     }
// })
let btn = $('.btn')
btn.on('click', function(e){
    let etaj = $(this)[0].id
    if (currentFloor < etaj) {
        while (currentFloor < etaj) {
            goUp()
            // console.log('qwe')
        }
    } else {
        while (currentFloor > etaj) {
            goDown()
            // console.log('qwe')
        }
    }
})