function solution(N, stages) {
    let failures = [];
    let players = stages.length;

    for (let i = 1; i <= N; i++) {
        let notCleared = stages.filter(stage => stage === i).length;
        let failureRate = players === 0 ? 0 : notCleared / players;
        failures.push({stage: i, rate: failureRate});
        players -= notCleared;
    }

    failures.sort((a, b) => {
        if (b.rate !== a.rate) {
            return b.rate - a.rate;
        }
        return a.stage - b.stage;
    });

    return failures.map(failure => failure.stage);
}