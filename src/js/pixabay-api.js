

const baseURL = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');

function showLoading() {
    loader.classList.add('active');
};

function hideLoading() {
    loader.classList.remove('active');
}


export function fetchData(inputValue) {
    const params = new URLSearchParams({
    key: '46844024-31822d2c5a5dcad2dc3c03c6f',
    q: inputValue, 
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
    });
    showLoading()
    return fetch(`${baseURL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }
        return response.json()
        })
        .finally(() => {
            hideLoading();
    })
}

