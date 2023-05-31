import axios from 'axios';

axios.defaults.baseURL = 'https://643327783e05ff8b37361a24.mockapi.io/';

export const fetchTweets = async() => {
    const response = await axios.get(`/contacts`);
    console.log(response)
    if(!response.data) {
        return Promise.reject( new Error( `Користувачів не знайдено` ));
    };
    return response.data;
};

export const updFollow = async(id, userFollowers) => {
    const response = await axios.put(`/contacts/${id}`,{ followers: userFollowers });
    if(!response.data) {
        return Promise.reject( new Error( `помилка підписки` ));
    };
    return response.data;
};

