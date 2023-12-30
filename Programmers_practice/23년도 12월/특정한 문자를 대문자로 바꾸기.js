function solution(my_string, alp) {
    let result = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === alp) {
            // 지정된 문자가 발견되면 대문자로 변환
            result += alp.toUpperCase();
        } else {
            // 그렇지 않으면 원래 문자를 결과에 추가
            result += my_string[i];
        }
    }
    return result;
}