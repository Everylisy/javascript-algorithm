function solution(n, control) {
    [...control].map((val, idx) => {
        switch(val) {
            case "w":
                n += 1;
                break;
            case "s":
                n -= 1;
                break;
            case "d":
                n += 10;
                break;
            case "a":
                n -= 10;
                break;
        }
    });

    return n;
}