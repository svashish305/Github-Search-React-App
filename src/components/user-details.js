import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router';
import {Link} from 'react-router-dom';
import {API} from '../api-service';
import {Jumbotron, Container, Card, Button} from 'react-bootstrap';

function UserDetails() {

  const history = useHistory()
  const routeParams = useParams()

  const [user, setUser] = useState(null);
  const [starredRepos, setStarredRepos] = useState(0);
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const user = await API.getUser(routeParams.username)
      .catch(err => console.log(err))
      setUser(user)
      const userRepos = await API.getReposOfUser(routeParams.username)
      .catch(err => console.log(err))
      setUserRepos(userRepos)
      const starredRepos = await API.getStarredReposOfUser(routeParams.username)
      .catch(err => console.log(err))
      setStarredRepos(starredRepos)
    }
    fetchUser();    
  },
  // eslint-disable-next-line 
  []);

  return (
    <React.Fragment>
      {user ? (
        <div>
          <Jumbotron fluid>
            <Container>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.avatar_url} alt='avatar' />
                <Card.Body>
                  <Card.Title>{user.login}</Card.Title>
                  <Card.Text>
                    Followers: {user.followers} <br/>
                    Starred Repos: {starredRepos.length} <br />
                    List of Repos: <br />
                    {userRepos && userRepos.length && userRepos.map(repo => {
                      return (
                        <div key={repo && repo.id}>
                          <Link to={`/${user.login}/repo-details/${repo.name}`}>{repo.name}</Link>
                        </div>
                      )
                    })}
                  </Card.Text>
                  <Button variant="primary" onClick={() => history.goBack()}>Go Back</Button>
                </Card.Body>
              </Card>
            </Container>
          </Jumbotron>
        </div>
      ) : 'Loading User...'}
    </React.Fragment>
  )
}

export default UserDetails;
