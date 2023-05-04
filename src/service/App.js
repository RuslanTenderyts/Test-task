import axios from 'axios';

axios.defaults.baseURL = 'https://643327783e05ff8b37361a24.mockapi.io/';

export const fetchTweets = async(page, limit = 3) => {
    const response = await axios.get(`/users`);
    if(!response.data) {
        return Promise.reject( new Error( `Користувачів не знайдено` ));
    };
    return response.data;
};

export const updFollow = async(id, userFollowers) => {
    const response = await axios.put(`/users/${id}`,{ followers: userFollowers });
    if(!response.data) {
        return Promise.reject( new Error( `помилка підписка` ));
    };
    return response.data;
};

