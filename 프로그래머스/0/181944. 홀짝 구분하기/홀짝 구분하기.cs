using System;

public class Example
{
    public static void Main()
    {
        string[] s;

        // 공백을 기준으로 문자열을 분리하여 배열에 저장
        s = Console.ReadLine().Split(' ');

        int a = Int32.Parse(s[0]);

        CheckEvenOrOdd(a);
    }

    public static void CheckEvenOrOdd(int number)
    {
        if (number % 2 == 0)
        {
            Console.WriteLine($"{number} is even");
        }
        else
        {
            Console.WriteLine($"{number} is odd");
        }
    }
}