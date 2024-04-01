using System;

public class Solution {
    public int solution(string ineq, string eq, int n, int m) {
        int answer = 0;
        
        bool condition;
        
        if (ineq == "<") {
            if (eq == "=") {
                condition = n <= m;
            } else {
                condition = n < m;
            }
        } else {
            if (eq == "=") {
                condition = n >= m;
            } else {
                condition = n > m;
            }
        }
        
        if (condition) {
            answer = 1;
        }
        
        return answer;
    }
}