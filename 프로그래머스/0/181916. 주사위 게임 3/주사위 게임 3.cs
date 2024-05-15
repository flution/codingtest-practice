using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int solution(int a, int b, int c, int d)
    {
        int answer = 0;
        List<int> list = new List<int>() { a, b, c, d };

        var listGroup = list.GroupBy(sameNum => sameNum)
                            .OrderByDescending(sameNum => sameNum.Count())
                            .Select(s => (s.Key, s.Count()))
                            .ToArray();

        if (listGroup[0].Item2 == 4)
            answer = 1111 * listGroup[0].Item1;
        else if (listGroup[0].Item2 == 3)
            answer = (10 * listGroup[0].Item1 + listGroup[1].Item1) * (10 * listGroup[0].Item1 + listGroup[1].Item1);
        else if (listGroup[0].Item2 == 2)
        {
            if (listGroup.Length > 2)
                answer = listGroup[1].Item1 * listGroup[2].Item1;
            else
                answer = (listGroup[0].Item1 + listGroup[1].Item1) * Math.Abs(listGroup[0].Item1 - listGroup[1].Item1);
        }
        else
            answer = list.Min();

        return answer;
    }
}
