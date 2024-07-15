

import {Card,Button} from 'react-bootstrap';
import { BsHeartFill, BsPencil, BsChatDots} from 'react-icons/bs';


const BlogCard = ({title,image,text,likes,comments,isLogged}) => {

  return (
   <Card style={{width:'18rem'}}>
    <Card.Img varient="top" src={image} style={{height:'170px' }}/>
    <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text  className="card-text">{text}</Card.Text>
        <div className="d-grid">
          <Button variant="warning">Read More</Button>
        </div>
    </Card.Body>

    <Card.Footer className="card-footer">

        <div className="footer-icons">
          <span className="icon-container">
            <BsHeartFill className="icon heart-icon" />
            <span className="icon-count">{likes}</span>
          </span>
          <span className="icon-container">
            <BsPencil className="icon" />
            <span className="icon-count">{comments}</span>
          </span>
          {
            isLogged &&(  <BsChatDots className="icon" />)
          }
         
        </div>

      </Card.Footer>

   </Card>
  )
}

export default BlogCard