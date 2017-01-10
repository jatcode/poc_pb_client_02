import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      ingredients : '',
      description : ''
    }
  }
  
  handleSubmit(e){
    const name = this.state.name.trim();
    this.props.addRecipe(
      name,
      this.state.ingredients.split('\n'),
    );
    e.preventDefault();
  }
  
  render(){
    return (
      <Form onSubmit={this.handleSubmit }>
        <Form.Field>
          <label>Recipe Name</label>
          <input value={this.state.name} name='name' onChange={(e)=> this.setState({name: e.target.value})} placeholder='Recipe name'/>
        </Form.Field>
        <Form.Field>
          <label>Ingredients</label>
          <input value={this.state.ingredients} name='ingredients' onChange={(e)=> this.setState({ingredients: e.target.value})} placeholder='Ingredients'/>
        </Form.Field>
        <Button type='submit'>Submit Form</Button>
      </Form>
    );
  }
}

export default AddRecipe;
