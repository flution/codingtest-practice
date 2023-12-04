function solution(absolutes, signs) {
    let sum = 0;

    for (let i = 0; i < absolutes.length; i++) {
        // signs[i]가 true이면 양수, false이면 음수를 더함
        sum += signs[i] ? absolutes[i] : -absolutes[i];
    }

    return sum;
}