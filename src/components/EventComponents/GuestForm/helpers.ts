import * as Yup from 'yup';
import { Guest } from '../../../interfaces/events';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('*The name is required'),
  lastname: Yup.string().required('*The last name is required'),
  email: Yup.string().email('*Invalid email').required('*The Email is required'),
  country: Yup.string().required('*The country is required'),
  phone: Yup.string().required('*The phone is required')
    .matches(/^[0-9]+$/, "*The number must not include letters").min(8, "*The number is too short").max(16, "*The number is too long"),
  job: Yup.string().required('*The job is required')

});

export const initialValues: Guest = {
  name: "",
  lastname: "",
  email: "",
  country: "",
  phone: "",
  job: "",
}

export const verifyRegistred = (guests: Guest[], email: string) => {
  let match: boolean = false;
  
  guests.map(guest => { if (guest.email === email) { match = true } })

  return match;
}