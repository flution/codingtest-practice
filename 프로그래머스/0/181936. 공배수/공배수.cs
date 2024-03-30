using System;

public class Solution {
    public int solution(int number, int n, int m) {
        return number % LCM(n, m) == 0 ? 1 : 0;
    }

    private int GCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    private int LCM(int a, int b) {
        return (a * b) / GCD(a, b);
    }
}