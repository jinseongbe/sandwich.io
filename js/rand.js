function random(n) {
    return (Math.floor(Math.random()*100000)%n);
}

function random2(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0 + 1)) + 0; //최댓값도 포함, 최솟값도 포함
  }