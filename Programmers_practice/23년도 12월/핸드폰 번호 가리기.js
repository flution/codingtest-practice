function solution(phone_number) {
    // 전화번호의 뒤 4자리를 제외한 부분의 길이를 계산
    var hideLength = phone_number.length - 4;

    // 앞부분을 '*'로 대체하고, 뒷부분을 그대로 두기
    return '*'.repeat(hideLength) + phone_number.substring(hideLength);
}