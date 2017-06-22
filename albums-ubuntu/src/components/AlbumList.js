import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ albums: response.data });
        console.log(this.state);
      })
      .catch((error)=>{
        console.log("Api call error");
        console.log(this.state);
        alert(error.message);
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    //console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;