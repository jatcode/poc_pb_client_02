import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'


class RecipeCard extends Component {
  
  render(){
    const { recipe }= this.props;
    // console.log(recipe);
    return (
      <Card
        centered={true}        
        header={recipe.name}
        meta='Description'
        
      />
    );
  }
  
}

export default RecipeCard;