using System;
using System.Collections.Generic;

public class Solution {
    public int[] solution(int n, int k) {
        List<int> multiples = new List<int>();
        
        for (int i = k; i <= n; i += k) {
            multiples.Add(i);
        }
        
        return multiples.ToArray();
    }
}