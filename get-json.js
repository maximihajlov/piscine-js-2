async function getJSON(path, params) {
    const url = params ? `${path}?${new URLSearchParams(params).toString()}` : path
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json().then((data) => {
            if (data.error) throw new Error(data.error);
            return data.data;
        });
    })
}
