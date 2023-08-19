import axios from 'axios';
import authHeader from './Admin/header.service';
import imageCompression from 'browser-image-compression';

const API_URL = import.meta.env.VITE_API_URL;

const uploadImg = async (img: File, name:string="img", size = 860) => {
   const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: size,
      useWebWorker: true,
   };

   try {
      const imgResizer = await imageCompression(img, options);
      
      if (!!imgResizer) {
         
         const data = new FormData();
         data.append(name, img);

         const res = await axios.post(API_URL + '/api/file/upload/img', data, {
            headers: {
               'content-type': 'multipart/form-data',
               ...authHeader(),
            },
         });

         return res;
      }
   } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err) && err.response?.status === 401) {
         alert("Користувач не авторизований. Спробуйте ввійти знову.");
      } else {
         alert("Помилка завантаження зображення на сервер. Спробуйте пізніше!");
      }
   }
};

export { uploadImg };
