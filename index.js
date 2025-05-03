let a = +prompt('Загадай')
let n = 34
while(true){
    n = Number(prompt('угадай'))
if (n > a) {
    alert("Число больше"+" "+a)
}else if (n < a){
    alert('Число меньше'+" "+a)
}else if (n == a){
    alert('Угадал!')
}
}
