import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#formImg');
const input = document.querySelector('#searchImg');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (input.value.trim() === '') {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
});

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('#formImg');
// const input = document.querySelector('#searchImg');

// form.addEventListener('submit', async event => {
//   event.preventDefault();

//   const query = input.value.trim();

//   if (query === '') {
//     iziToast.error({
//       title: 'Error',
//       message:
//         'Sorry, there are no images matching your search query. Please try again!',
//     });
//     return; // Прерываем выполнение кода
//   }

//   try {
//     const response = await fetch(
//       `https://pixabay.com/api/?key=YOUR_API_KEY&q=${encodeURIComponent(
//         query
//       )}&image_type=photo`
//     );

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();

//     if (data.hits.length === 0) {
//       iziToast.error({
//         title: 'Error',
//         message:
//           'No images found for your query. Please try another search term.',
//       });
//     } else {
//       iziToast.success({
//         title: 'Success',
//         message: `Found ${data.hits.length} images!`,
//       });
//       // Добавьте отображение изображений здесь
//       console.log(data.hits);
//     }
//   } catch (error) {
//     iziToast.error({
//       title: 'Error',
//       message: 'An error occurred. Please try again later.',
//     });
//     console.error('Error:', error);
//   }
// });
