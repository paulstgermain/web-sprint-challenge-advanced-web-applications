import { axiosWithAuth } from '../helpers/axiosWithAuth';


export const fetchColors = () => {
      return axiosWithAuth().get('http://localhost:5000/api/colors')
          .then(res => {
            console.log(res.data);
            return res;
          })
          .catch(err => {
            console.log(err.message);
            return err;
          })
    }

