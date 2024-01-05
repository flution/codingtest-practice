function solution(myString, pat) {
    let result = '';

    for (let i = myString.length; i >= 0; i--) {
        if (myString.substring(i - pat.length, i) === pat) {
            let currentSubstring = myString.substring(0, i);
            if (currentSubstring.length > result.length) {
                result = currentSubstring;
            }
        }
    }

    return result;
}