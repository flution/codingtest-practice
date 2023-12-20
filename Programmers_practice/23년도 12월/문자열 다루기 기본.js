function solution(s) {
    let length = s.length;
    
    // 길이가 4 또는 6인지 확인
    if (length !== 4 && length !== 6) {
        return false;
    }

    // 숫자로만 구성되어 있는지 확인
    for (var i = 0; i < length; i++) {
        if (s[i] < '0' || s[i] > '9') {
            return false;
        }
    }

    return true;
}