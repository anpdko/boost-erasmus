import { Routes, Route } from 'react-router-dom'

import { CreateEvent } from '../components/admin'

const RouterBoxInputs = () => {
   return (
      <Routes>
         <Route path='create' element={<CreateEvent/>}/>
         {/* <Route path='edit/:id' element={<EditBook/>}/> */}
      </Routes>
   );
};
export default RouterBoxInputs