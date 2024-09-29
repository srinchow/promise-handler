const to = <T>(promise: Promise<T>): Promise<[Error | null, T | null]> => {
    return promise
        .then(data => [null, data] as [null, T])
        .catch(err => [err, null] as [Error, null]);
}

export { to };
