import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

function UserList(props) {

  const [searchClicked, setSearchClicked] = useState(false);
  const [userNameToSearch, setUserNameToSearch] = useState(null);

  return (
    <React.Fragment>
      <div>
        Search a particular user: <br />
        <input className='search-input' placeholder='Enter username' onChange={(evt) => setUserNameToSearch(evt.target.value)}/>
        <Button className='ml-20' onClick={() => setSearchClicked(true)}>Search</Button>
        <br />
      </div>
      {searchClicked ? (
        <Link to={`/user-details/${userNameToSearch}`}>Load User {userNameToSearch}</Link>
      ) : (
        <div className='mt-30'>
          List of users:
          <br />
          {props.userList && props.userList.length && props.userList.map(user => {
            return (
              <div key={user && user.id}>
                <Link to={`/user-details/${user.login}`} >{user.login}</ Link>
              </div>
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export default UserList;