import axios from 'axios'

const BASE_URL = 'https://dummyjson.com/quotes/random'

export const getQuote = async () => {
    try {
        const response = await axios.get(BASE_URL);

        return response.data;
    } catch (error) {
        console.log(error);

        return {
            content: "Failed to fetch quote.",
            author: "System",
        };
    }
}