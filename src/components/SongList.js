import React, { Component } from "react"; //using name export if you want
import { connect } from "react-redux";
import { selectSong } from "../actions";

// you can use just Component instead of React.Component
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// get specific data out our redux store
const mapStateToProps = (state) => {
  //return as props in our SongList component
  return { songs: state.songs };
};

// connect is from redux
export default connect(mapStateToProps, {
  selectSong, //aka selectSong: selectSong thru es2015 syntax
})(SongList);
