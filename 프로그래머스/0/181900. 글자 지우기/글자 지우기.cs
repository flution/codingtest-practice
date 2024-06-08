using System;
using System.Linq;

public class Solution {
    public string solution(string my_string, int[] indices) {
        var indexSet = indices.ToHashSet();
        var result = new System.Text.StringBuilder();
        for (int i = 0; i < my_string.Length; i++) {
            if (!indexSet.Contains(i)) {
                result.Append(my_string[i]);
            }
        }
        return result.ToString();
    }
}