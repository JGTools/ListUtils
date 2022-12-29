export function remove<T>(list: T[], f: (l: T) => boolean) {
    const removed = [];
    const temp = [...list];
    list.length = 0;
    for (const e of temp) {
        if (f(e))
            removed.push(e);
        else
            list.push(e);
    }
    return removed;
}