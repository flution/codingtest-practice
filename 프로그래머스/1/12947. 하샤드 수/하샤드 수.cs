using System;

public class Solution {
    public bool solution(int x) {
        int xSum = 0;
        int temp = x;

        while (temp > 0) {
            xSum += temp % 10; // 일의 자리 숫자 추출
            temp /= 10; // 일의 자리 숫자 제거
        }

        return x % xSum == 0;
    }
}