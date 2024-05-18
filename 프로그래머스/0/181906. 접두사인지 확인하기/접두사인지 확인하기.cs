using System;

public class Solution {
    public int solution(string my_string, string is_prefix) {
        if (my_string.StartsWith(is_prefix)) {
            return 1;
        } else {
            return 0;
        }
    }
}