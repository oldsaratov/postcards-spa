export function checkStatus (response) {
    var error;

    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        error = new Error(response.statusText);
        error.response = response;

        throw error;
    }
}

export function parseJSON (response) {
    return response.json();
}
