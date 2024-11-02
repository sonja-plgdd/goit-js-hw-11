import { fetchData } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createMarkup } from "./js/render-functions";

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery')


form.addEventListener('submit', handleSubmit);
export function handleSubmit(event) {
    event.preventDefault();
    const userInput = event.target.elements[0].value;
    if (userInput !== '') {
        gallery.innerHTML = '';
        fetchData(userInput)
            .then((data) => {
                if (data.hits.length === 0) {
                    iziToast.show({
                        message: "Sorry, there are no images matching your search query. Please try again!",
                        backgroundColor: '#ef4040',
                        messageColor: '#fff',
                        position: 'topRight',
                        maxWidth: 432,
                    });
                }
                createMarkup(data);
            })
            .catch((error) => {
                console.log(error)
            })
    };
    return;
}





