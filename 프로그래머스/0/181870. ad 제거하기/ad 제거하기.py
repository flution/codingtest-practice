def solution(strArr):
    result = [s for s in strArr if "ad" not in s]
    return result

# 테스트
print(solution(["and","notad","abcd"]))  # ["and","abcd"]
print(solution(["there","are","no","a","ds"]))  # ["there","are","no","a","ds"]