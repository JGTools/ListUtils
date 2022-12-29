export function remove<T>(list: T[], f: (l: T) => boolean) {
    const removed = [];
    const nl = [];
    for (const e of list) {
        if (f(e))
            removed.push(e);
        else
            nl.push(e)
    }
    list.length = 0;
    Object.assign(list, nl);
    return removed;
}