function solution(my_string, target) {
    // my_string에 target이 포함되어 있다면 1을 반환, 그렇지 않으면 0을 반환
    return my_string.includes(target) ? 1 : 0;
}