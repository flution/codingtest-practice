function solution(my_string, is_suffix) {
    // is_suffix의 길이
    const suffixLength = is_suffix.length;

    // my_string에서 is_suffix의 길이만큼 끝에서부터 추출한 부분 문자열
    const endOfString = my_string.substring(my_string.length - suffixLength);

    // 추출한 부분 문자열과 is_suffix 비교
    if (endOfString === is_suffix) {
        return 1;
    } else {
        return 0;
    }
}