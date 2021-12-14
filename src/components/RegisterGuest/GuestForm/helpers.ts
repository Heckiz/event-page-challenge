import * as Yup from 'yup';
import { Guest } from '../../../interfaces/events';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('*The name is required'),
  lastname: Yup.string().required('*The last Name is required'),
  email: Yup.string().email('*Invalid email').required('*The Email is required'),
  country: Yup.string().required('*The Country is required'),
  phone: Yup.string().required('*The phone is required'),
  job: Yup.string().required('*The job is required')
  
});

export const initialValues: Guest = {
    name:"",
    lastname:"",
    email:"",
    country:"",
    phone:"",
    job:"",
}