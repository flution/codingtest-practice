function solution(arr) {
    // 배열의 현재 길이
    let currentLength = arr.length;

    // 가장 가까운 2의 거듭제곱을 찾기
    let power = 1;
    while (power < currentLength) {
        power *= 2;
    }

    // 필요한 만큼 0 추가
    while (arr.length < power) {
        arr.push(0);
    }

    return arr;
}