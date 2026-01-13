import React from 'react';
import useAuth from '../customHooks/useAuth';
import { updateProfile } from 'firebase/auth';
import {auth} from '../firebase/firebase.config'
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const MyProfile = () => {
    const {user, setUser} = useAuth();
    const navigate = useNavigate();
    
 const handleUpdate = (e) => {
        e.preventDefault();
        const name= e.target?.name.value;
        const photo = e.target?.photo.value;
        // console.log(name, photo);

           if (user.email === "luxtrip@demo.com") {
          Swal.fire({
            icon: "error",
            title: "Demo user cannot update profile",
          });
          return; 
        }
        
        const profile = {
          displayName: name,
          photoURL: photo,
        };

      updateProfile(auth.currentUser, profile)  
      .then(() => {
        setUser({...auth.currentUser, profile});
     toast.success('Profile updated successfully!');
    navigate('/dashboard');
      })
      .catch(error =>{
        console.log(error);
        setUser(user);
      })
    }
    return (
    <div className='bg-blue-50 rounded-lg'>
    <div className="container mx-auto shadow-lg rounded-2xl p-8 ">
        <h2 data-aos="fade-right" className='text-accent font-bold text-3xl text-center pt-8'>My Profile</h2>
      <div className="card-body">
        <form  onSubmit={handleUpdate} className="space-y-5">
       
            {/* Name */}
            <div>
          <label className="block font-medium text-accent mb-1"> Name</label>
          <input type="text" name='name' defaultValue={user.displayName} required className="w-full dark:text-primary input text-accent border-orange-400 dark:bg-white dark:border-gray-500" placeholder="Name" />
          </div>
          {/* Photo */}
          <label className="block font-medium text-accent mb-1">Photo</label>
          <input type="text" name='photo'  className="w-full dark:text-primary input text-accent border-orange-400 dark:bg-white dark:border-gray-500" placeholder="PhotoURL" />
          {/* Email */}
           
          <label className="block font-medium text-accent mb-1">
            Email
          </label>
          <input
            type="email"
           
            defaultValue={user?.email}
            readOnly
            className="w-full dark:text-primary border rounded-lg p-2 bg-gray-100 text-primary cursor-not-allowed border-orange-400"
          />
        
   <button type='submit' className="w-full btn-primary mt-3 hover:text-xl">Update</button> 
      
        </form>
      </div>
    </div>
   
    </div>
    );
};

export default MyProfile;