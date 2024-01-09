function solution(todo_list, finished) {
    const unfinishedTasks = [];

    for (let i = 0; i < todo_list.length; i++) {
        if (!finished[i]) {
            unfinishedTasks.push(todo_list[i]);
        }
    }

    return unfinishedTasks;
}