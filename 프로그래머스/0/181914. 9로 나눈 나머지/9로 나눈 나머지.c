#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
int solution(const char* number) {
    int answer = 0;
    int len = 0;
    
    // 문자열 길이 계산
    while (number[len] != '\0') {
        len++;
    }
    
    // 각 자리 숫자의 합 계산
    for (int i = 0; i < len; i++) {
        answer += number[i] - '0';
    }
    
    // 9로 나눈 나머지 계산
    answer %= 9;
    
    return answer;
}