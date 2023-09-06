import axios from 'axios';

const searchImages = async(event) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID SvHl0MFp5Fd_bhB343FhkifkuZgRowljF2FQG7x8fcs'
        },
        params:{
            query: event
            },
    });
    // console.log(response.data.results[0].urls);
    const b = response.data.results;
    return b;

};

export default searchImages;