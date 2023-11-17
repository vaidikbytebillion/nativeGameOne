import axios from 'react-native-axios'

export const getUserList = () => {
    try {
        const res = axios.get('https://dummyjson.com/products')
        return res;
    }
    catch (err) {
        return err;
    }
}