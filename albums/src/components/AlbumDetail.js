// This component is just for presentation so it is a functional component

import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

const AlbumDetail = (props) => {
  const {viewStyle} = styles;
  return (
    <Card>
      <CardSection>
        <Text>{ props.album.title }</Text>
      </CardSection>
      <CardSection>
        <Image source={{ uri:props.album.image }} />
        <Text>{ props.album.artist }</Text>
      </CardSection>
    </Card>
  )
}

const styles = {
  viewStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 5,
    padding: 5
  }
}

export default AlbumDetail