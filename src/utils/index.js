export * from './constants';

export const setItemInLocalStorage = (value, key) => {
    if (!key || !value) {
        return console.error("Can not store in LS");
    }

    const valueToStore = typeof value !== "string" ? JSON.stringify(value) : value;

    localStorage.setItem(key, valueToStore);
}

export const getItemFromLocalStorage = (key) => {
    if (!key) {
        return console.error("Can get the value from LS");
    }

    // const valueToStore = typeof value !== "string" ? JSON.stringify(value) : value;

    localStorage.getItem(key);
}

export const removeItemFromLocalStorage = (key) => {
    if (!key) {
        return console.error("Can not remove item from LS");
    }

    // const valueToStore = typeof value !== "string" ? JSON.stringify(value) : value;

    localStorage.removeItem(key);
}

export const getFormBody = (params) => {
    let formBody = [];

    for (let property in params) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(params[property]);

        formBody.push(encodedKey + "=" + encodedValue);
    }

    return formBody.join("&");
}

export default getFormBody;