import React, {Component} from 'react';
import {Divider } from 'semantic-ui-react';

import RecipeList from './RecipeList';

class Home extends Component {
  render() {
    return(
      <div>
        <Divider />
        <RecipeList {...this.props} />
      </div>
    );
    
  }
}
export default Home;