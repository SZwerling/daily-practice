import React from "react";
import { connect } from "react-redux";


class UserHeader extends React.Component {

   render() {
      const {user } = this.props;
    
      if (!user) {
         return null;
      }
      return <div className="header">{user.name}</div>;
   }
}

const mapStateToProps = (state, ownProps) => { // see explanation of ownProps below
   return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);


//We extracted this logic that was in the render method and put it in mapStateToProps
//const user = this.props.users.find(user => user.id === this.props.userId)// to give us the one user with the matching id.
//But this.props.userId is only available in the component and not in mapStateToProps ?? It is!
//With ownProps we get access to the props passed into the component.
//The userId props is passed in from the PostList component.