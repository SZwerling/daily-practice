import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

    componentDidMount(){
        this.props.fetchPosts(); //calls fetchPosts from index.js of actions folder
    }
    render(){
        console.log(this.props.posts)
        return(
            <div>
                Post List
            </div>
        )
    }
}

// every time reducer runs, mapStateToProps get called again
const mapStateToProps = (state) => { // in reducers we assigned result from action.payload to property key "posts"
    return { posts: state.posts}     // so it is available as state.posts and we assign it to "posts"
}                                    // So then available in this comp as this.props.posts

export default connect(mapStateToProps, { fetchPosts : fetchPosts })(PostList);