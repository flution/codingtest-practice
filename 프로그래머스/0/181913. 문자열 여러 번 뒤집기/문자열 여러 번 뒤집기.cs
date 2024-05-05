using System;
using System.Text;

public class Solution {
    public string solution(string my_string, int[,] queries) {
        StringBuilder sb = new StringBuilder(my_string);

        // queries 배열을 순회하며 문자열 뒤집기
        for (int i = 0; i < queries.GetLength(0); i++) {
            int start = queries[i, 0];
            int end = queries[i, 1];

            // start부터 end까지의 부분 문자열을 뒤집음
            ReverseSubstring(sb, start, end);
        }

        return sb.ToString();
    }

    // StringBuilder에서 특정 범위의 부분 문자열을 뒤집는 메서드
    private void ReverseSubstring(StringBuilder sb, int start, int end) {
        while (start < end) {
            char temp = sb[start];
            sb[start++] = sb[end];
            sb[end--] = temp;
        }
    }
}