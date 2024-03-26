using System;

public class Solution {
    public int solution(int a, int b) {
        // a와 b를 문자열로 변환하여 붙인 후 정수로 변환하여 비교
        int num1 = int.Parse(a.ToString() + b.ToString());
        int num2 = 2 * a * b;

        // 두 값을 비교하여 큰 값을 반환
        return Math.Max(num1, num2);
    }
}