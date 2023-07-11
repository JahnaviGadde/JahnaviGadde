import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Works = () => {
    return (
        <div className="Works" id="works">
        <div>

        <h3>WORKS</h3>
        <div className="workswrapper">
        <Card  className="cards">
        <Card.Body>
        <Card.Title style={{color: '#00B093', fontWeight : 'bold'}}>Affinity </Card.Title>
        <Card.Text>
        <ul>
            <li>
             A social media application built using the MERN stack and socket.io
            </li>
            <li>
                An interactive application with real-time chat and share content
            </li>
            <li>where users can share content, Like and follow/unfollow each
other and also can chat with their friends(real time chat)</li>
        </ul>

        </Card.Text>
        <Button variant="primary" className="github"><a href="https://github.com/JahnaviGadde/Affinity-social-media-application" target="_blank">Github repository link</a></Button>
      </Card.Body>
       </Card>
        
       <Card className="cards">
        <Card.Body>
        <Card.Title style={{color: '#00B093', fontWeight : 'bold'}}>Exam center</Card.Title>
        <Card.Text>
        <ul>
            <li>
             An online exam management portal built using MERN stack
            </li>
            <li>
                Admin can set question paper and view its results.
            </li>
            <li>
                user can sttempt test with the given Id. Prevents malpractices by closing questions when switched tabs.
            </li>
        </ul>

        </Card.Text>
        <Button variant="primary" className="github"><a href="https://github.com/JahnaviGadde/Exam-center" target="_blank">Github repository link</a></Button>
      </Card.Body>
       </Card>
        
            </div>
        </div>
    </div>
    );

};

export default Works ;  