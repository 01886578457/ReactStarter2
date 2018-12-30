import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 0841a7e522e182f6b7d95dfd868dff8a5cac81f204ff63ac5c73af4fa297ad95'
    }
});