function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    sizes.forEach(([w, h]) => {
        const [maxSize, minSize] = w > h ? [w, h] : [h, w];
        maxWidth = Math.max(maxWidth, maxSize);
        maxHeight = Math.max(maxHeight, minSize);
    });

    return maxWidth * maxHeight;
}