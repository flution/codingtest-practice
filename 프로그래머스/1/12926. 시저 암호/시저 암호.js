function solution(s, n) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        // 대문자인 경우
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 + n) % 26) + 65);
        }
        // 소문자인 경우
        else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 + n) % 26) + 97);
        }
        // 공백인 경우
        else {
            result += ' ';
        }
    }
    return result;
}

//생각하기
//대문자열과 소문자열을 구분해서 나눠두고,
//n만큼 index[i]를 이동하도록 만들고 출력하게 하면 된다.
