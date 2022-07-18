function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    var playerCount = 1
    var computerCount = 1
        function play(){
            if (confirm("Бросить кости?")){
                let computer = (getRandomInRange(1, 6));
                let computer2 = (getRandomInRange(1, 6));
                let player = (getRandomInRange(1, 6));
                let player2 = (getRandomInRange(1, 6));
                    if (player + player2 > computer + computer2){
                        alert(`Вы выиграли!\nВы: ${player} + ${player2} = ${player + player2}\nКомпьютер: ${computer} + ${computer2} = ${computer + computer2}`);
                        document.getElementById("player").innerHTML = `Вы: ${playerCount ++}`;
                    }   if (player + player2 < computer + computer2) {
                        alert(`Вы проиграли!\nВы: ${player} + ${player2} = ${player + player2}\nКомпьютер: ${computer} + ${computer2} = ${computer + computer2}`);
                        document.getElementById("computer").innerHTML = `Компьютер: ${computerCount++}`;
                    }   if (player + player2 === computer + computer2) {
                        alert(`Ничья!\nВы: ${player} + ${player2} = ${player + player2}\nКомпьютер: ${computer} + ${computer2} = ${computer + computer2}`);
        }
    }
}
