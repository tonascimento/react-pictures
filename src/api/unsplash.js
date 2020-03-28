import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 9K8BYbMEH5d2FFEcN5LdpIGM-8JCGczdCfuFDkQU-vA'
    }
});