import React from "react";
import { connect } from "react-redux";
import { fetchPuzzle } from "./actions";

class App extends React.Component {
   componentDidMount() {
      this.props.fetchPuzzle();
   }

   render() {
    console.log(this.props.puzzle.puzzle)
    if(this.props.puzzle){
      return <div>{this.props.puzzle.puzzle}</div>
    } else {
      return <div>app</div>;
    }
     
   }
}

const mapStateToProps = (state) => {
   return { puzzle: state.data };
};

export default connect(mapStateToProps, { fetchPuzzle })(App);
