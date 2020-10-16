import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router';
import {API} from '../api-service';
import {Jumbotron, Container, Card, Button} from 'react-bootstrap';

function RepoDetails() {

  const history = useHistory()
  const routeParams = useParams()
  
  const [repo, setRepo] = useState(null)
  const [commitsOfRepo, setCommitsOfRepo] = useState([])
  const [issuesOfRepo, setIssuesOfRepo] = useState([])

  useEffect(() => {
    async function fetchRepo() {
      const repo = await API.getRepoOfUser(routeParams.username, routeParams.reponame)
      .catch(err => console.log(err))
      setRepo(repo)
      const commitsOfRepo = await API.getCommitsOfRepo(routeParams.username, routeParams.reponame)
      .catch(err => console.log(err))
      setCommitsOfRepo(commitsOfRepo)
      const issuesOfRepo = await API.getIssuesOfRepo(routeParams.username, routeParams.reponame)
      .catch(err => console.log(err))
      setIssuesOfRepo(issuesOfRepo)
    }
    fetchRepo();    
  },
  // eslint-disable-next-line 
  [])
  
  return (
    <React.Fragment>
      {repo ? (
        <div>
          <Jumbotron fluid>
            <Container>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{repo.name}</Card.Title>
                  <Card.Text>
                    Full Name: {repo.full_name} <br />
                    Description: {repo.description} <br />
                    Is Repo Private? : {repo.private ? 'Yes' : 'No'} <br /> 
                    Is Repo Forked? : {repo.fork ? 'Yes' : 'No'} <br /> 
                    Language: {repo.language} <br />
                    No of Forks: {repo.forks_count} <br />
                    No. of Commits: {commitsOfRepo.length} <br />
                    No. of Issues: {issuesOfRepo.length} <br />
                  </Card.Text>
                  <Button variant="primary" onClick={() => history.goBack()}>Go Back</Button>
                </Card.Body>
              </Card>
            </Container>
          </Jumbotron>
        </div>
      ) : 'Loading Repo...'}
    </React.Fragment>
  )
}

export default RepoDetails;
