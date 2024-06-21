using System;

public class Solution {
    public int solution(int[] num_list, int n) {
        bool exists = Array.Exists(num_list, element => element == n);
        return exists ? 1 : 0;
    }
}