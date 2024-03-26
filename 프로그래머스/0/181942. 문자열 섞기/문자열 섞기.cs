using System;

public class Solution {
    public string solution(string str1, string str2) {
        string newString = "";

        for (int i = 0; i < str1.Length; i++)
        {
            newString += str1[i].ToString() + str2[i].ToString();
        }

        return newString;
    }
}