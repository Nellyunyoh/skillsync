const BASE_URL = 'http://localhost:3000';

export const API_ENDPOINTS = {
    login: '${BASEURL}/login',
    mentors: '${BASEURL}/mentors',
    interns: '${BASEURL}/interns',
}

export const getData = async (url) => {
    try {
        const response = await getData(url);
        if (!response.ok) throw new Error('Response not found');
        return await response.json();
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const postData = async (url, data) => {
    try {
        const response = await getData(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }
    catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}

export const deleteData = async (url) => {
    try {
        await getData(url, {
            method: 'DELETE',
        });
        console.log('Deleted successfully');
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
}

export default BASE_URL;

