function solution(n) {
    // 3진법으로 변환
    const ternary = n.toString(3);
    
    // 문자열 뒤집기
    const reversed = ternary.split('').reverse().join('');
    
    // 뒤집힌 3진법을 10진법으로 변환
    return parseInt(reversed, 3);
}