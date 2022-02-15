import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {Audio} from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressButtonIndex: '',
    };
  }
  playSound=async(soundChunk)=>{
    console.log(soundChunk);
    var soundLink = 'https://curriculum.whitehatjr.com/Visual+Project+Asset/PRO_VD/Phones/phones/' +
     soundChunk +
      '.mp3'
        await Audio.Sound.createAsync(
        {
        uri: soundLink,
        },
        {shouldPlay: true});
    };
    render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressButtonIndex
            ? [styles.chunkButton, { backgroundColor: 'white' }]
            : [styles.chunkButton, { backgroundColor: 'red' }]
        }
        onPress={() => {
          this.setState({ pressButtonIndex: this.props.buttonIndex });
          this.playSound(this.props.soundChunk);
        }}>
        <Text
          style={
            this.props.buttonIndex === this.state.pressButtonIndex
              ? [styles.displayText, { color: 'red' }]
              : [styles.displayText, { color: 'white' }]
          }>
          {this.props.wordChunk}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    margin: 5,
    backgroundColor: 'red'
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  }
})