const apiPath = '';

const GET = function (path) {
    return new Promise((resolve, reject) => {
        fetch(apiPath + '/' + path, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(getBody).catch(error).then(res => {
            return returnResult(resolve, reject, res);
        });
    });
}

const POST = function (path, body) {
    return new Promise((resolve, reject) => {
        fetch(apiPath + '/' + path, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(getBody).catch(error).then(res => {
            return returnResult(resolve, reject, res);
        });
    });
}

const PUT = function (path, body) {
    return new Promise((resolve, reject) => {
        fetch(apiPath + '/' + path, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(getBody).catch(error).then(res => {
            return returnResult(resolve, reject, res);
        });
    });
}

const PUTRaw = function (path, body) {
    return new Promise((resolve, reject) => {
        fetch(apiPath + '/' + path, {
            method: 'PUT',
            credentials: 'include',
            body: body
        }).then(getBody).catch(error).then(res => {
            return returnResult(resolve, reject, res);
        });
    });
} 

const PATCH = function (path, body) {
    return new Promise((resolve, reject) => {
        fetch(apiPath + '/' + path, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(getBody).catch(error).then(res => {
            return returnResult(resolve, reject, res);
        });
    });
}

const DELETE = function (path) {
    return new Promise((resolve, reject) => {
        fetch(apiPath + '/' + path, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(getBody).catch(error).then(res => {
            return returnResult(resolve, reject, res);
        });
    });
}

const getBody = res => {
    return { body: !res ? res : res.json(), ok: res.ok };
}

const error = err => {
    return { body: err, ok: false };
}

const returnResult = (resolve, reject, res) => {
    res.body.then(body => {
        if (res.ok) return resolve(body.data);
        return reject(body.error);
    });
}

export default { GET, POST, PATCH, PUTRaw, PUT, DELETE };