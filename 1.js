var m = parseFloat(prompt("Ban can tim cac so nguyen to be hon bao nhieu?"));

function isPrime(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    } else if (n == 2) {
        flag = true;
    } else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 3; i < Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag == true) {
    document.write(n + " la so nguyen to" + "</br>");
    }

}
    for (n=0;n < m; n++) {
        isPrime(n);
    }