export * from './constants';

export const setItemInLocalStorage = (value, key) => {
    if (!key || !value) {
        return console.error("Can not store in LS");
    }
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