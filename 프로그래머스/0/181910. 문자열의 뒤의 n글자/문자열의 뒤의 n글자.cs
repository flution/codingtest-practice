using System;

public class Solution {
    public string solution(string my_string, int n) {
        // 문자열의 길이에서 n만큼 뺀 인덱스부터 끝까지의 부분 문자열을 추출하여 반환합니다.
        return my_string.Substring(Math.Max(0, my_string.Length - n));
    }
}