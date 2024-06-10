import axios from 'axios';
import { USER_API_END_POINT } from '../components/Api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { getMyProfile } from '../redux/userSlice';

const useGetProfile = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
          withCredentials: true,
        });
        console.log('Profile data:', res.data); // Log the fetched profile data
        dispatch(getMyProfile(res.data.user));
      } catch (error) {
        console.log('Error fetching profile:', error); // Log any errors that occur during fetching
      }
    };
    fetchMyProfile();
  }, [id, dispatch]);
};

export default useGetProfile;
