function plusPlus(orig_x) {
    let orig_x_coerced = Number(orig_x);
    x = orig_x_coerced + 1;
    return x;
}

let ukupno = 1;
const izracunajFaktorijel = n => {
    ukupno *= n--;
    if(n > 0)
        izracunajFaktorijel(n);
    return ukupno;
}

console.log(izracunajFaktorijel(5));
