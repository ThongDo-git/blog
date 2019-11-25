import React, { Component } from "react";
import { fetchPosts } from "../actions";
import { connect } from "react-redux";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
