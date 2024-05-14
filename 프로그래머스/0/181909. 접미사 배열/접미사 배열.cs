using System;

public class Solution {
    public string[] solution(string my_string) {
        int n = my_string.Length;
        string[] suffixes = new string[n];
        
        // 모든 접미사 추출
        for (int i = 0; i < n; i++) {
            suffixes[i] = my_string.Substring(i);
        }
        
        // 접미사 배열 정렬
        Array.Sort(suffixes);
        
        return suffixes;
    }
}
