import * as Yup from 'yup';
export const signupschema=Yup.object({
    firstname:Yup.string().min(3).max(10).required("Enter Valid First Name"),
    lastname:Yup.string().min(3).max(10).required("Enter Valid Last Name"),
    id:Yup.string().email().required("Enter Valid Email"),
    password:Yup.string().min(6).max(10).required("Enter Valid Password")
})