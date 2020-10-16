import {useState, useEffect} from 'react'
import {API} from '../api-service';

function useFetch() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
      async function fetchData() {
          setLoading(true);
          setError();
          const userList = await API.getUsers()
          .catch(err => {
            setError(err)
          })
          setUserList(userList)
          setLoading(false);
      }
      fetchData();    
  },
  // eslint-disable-next-line 
  []);
  return [userList, loading, error] 
}

export {useFetch}