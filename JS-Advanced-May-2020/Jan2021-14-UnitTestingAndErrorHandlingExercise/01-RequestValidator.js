function validator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validUri = /^(\.*[a-zA-Z]*[0-9]*\.*\**)+$/g;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const validMessage = /^[^<>\\&'"]*$/g;

    if (!validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (obj.uri === undefined || obj.uri === '' || !(obj.uri === '*' || validUri.test(obj.uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (obj.message === undefined || !(obj.message === '' || validMessage.test(obj.message))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}
