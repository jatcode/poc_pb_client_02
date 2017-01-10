import React , {Component} from 'react';
import {Link} from 'react-router';
import {Header, Container, Divider } from 'semantic-ui-react'

class Main extends Component {
  
  render() {
    return(
      <Container>
        <Header as='h3' textAlign='center'>
          <Link to='/'>Home </Link>          
          <Link to='/recipes/add'>Add Recipe</Link>
        </Header>
        {React.cloneElement(this.props.children, this.props)}
      </Container>
    );
  }
}

export default Main;