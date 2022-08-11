import React from 'react';
import UserHeader from './UserHeader';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

    componentDidMount(){
        this.props.fetchPosts(); //calls fetchPosts from index.js of actions folder
    }

    renderList(){
        return this.props.posts.map(post => {
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <p>{post.id}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

// every time reducer runs, mapStateToProps get called again
const mapStateToProps = (state) => { // in reducers we assigned result from action.payload to property key "posts"
    return { posts: state.posts}     // so it is available as state.posts and we assign it to "posts"
}                                    // So then available in this comp as this.props.posts

export default connect(mapStateToProps, { fetchPosts : fetchPosts })(PostList);