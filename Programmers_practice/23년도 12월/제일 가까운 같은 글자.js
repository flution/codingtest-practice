function solution(s) {
    let result = [];
    let lastSeen = {}; // 문자가 마지막으로 나타난 위치를 저장합니다.

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (lastSeen[char] !== undefined) {
            // 이전에 문자가 나타난 적이 있으면, 그 위치와의 차이를 계산합니다.
            result.push(i - lastSeen[char]);
        } else {
            // 문자가 처음 나타난 경우 -1을 추가합니다.
            result.push(-1);
        }
        // 현재 문자의 위치를 갱신합니다.
        lastSeen[char] = i;
    }

    return result;
}