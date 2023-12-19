function solution(numLog) {
    let result = "";
    for (let i = 1; i < numLog.length; i++) {
        let diff = numLog[i] - numLog[i - 1];
        if (diff === 1) {
            result += "w";
        } if (diff === -1) {
            result += "s";
        } if (diff === 10) {
            result += "d";
        } if (diff === -10) {
            result += "a";
        }
    }
    return result;
}
