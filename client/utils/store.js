import AsyncStorage from '@react-native-async-storage/async-storage';

//token
export const setToken = (token) => {
    return _storeData('TOKEN', token)
}
export const getToken = () => {
    return _retrieveData('TOKEN')
}
export const deleteToken = () => {
    return _removeData('TOKEN')
}

//uid
export const setUid = (uid) => {
    return _storeData('UID', uid)
}
export const getUid = () => {
    return _retrieveData('UID')
}

//basic func
const _storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        return true
    } catch (err) {
        return false
    }
};

const _retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value)
        }
        throw Error('no such item')
    } catch (err) {
        return false
    }
};

const _removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true
    } catch (err) {
        return false
    }
};
