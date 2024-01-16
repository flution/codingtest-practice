function solution(a, b) {
    // 두 정수를 문자열로 변환하여 연결하고, 다시 정수로 변환
    const op1 = parseInt(a.toString() + b.toString());
    // 주어진 공식에 따라 계산
    const op2 = 2 * a * b;

    // 두 연산의 결과를 비교하여 더 큰 값을 반환
    // 같은 경우에는 op1을 반환
    return op1 >= op2 ? op1 : op2;
}