using System;
using System.Linq;

public class Solution {
    public string solution(string[] str_list, string ex) {
        string result = "";
        foreach (string str in str_list) {
            if (!str.Contains(ex)) {
                result += str;
            }
        }
        return result;
    }
}