function solution(str1, str2) {
  let result = '';

  // str1과 str2의 길이는 같으므로 하나를 기준으로 반복
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i]; // str1의 i번째 문자와 str2의 i번째 문자를 번갈아 추가
  }

  return result;
}