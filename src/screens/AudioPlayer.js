import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import AlbumArt from './player_components/AlbumArt';
import TrackDetails from './player_components/TrackDetails';
import SeekBar from './player_components/SeekBar';
import Controls from './player_components/Controls';
import Video from 'react-native-video'; 
import CHeader from '~/components/CHeader';
import { cStyles } from '~/utils/styles';
import CImage from '~/components/CImage';
import { Assets } from '~/config';
import axios from 'axios';
import cheerio from 'react-native-cheerio/lib/cheerio';
 const TRACKS = [
  {
    title: 'A Candle Visualization',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "https://samplelib.com/lib/preview/mp3/sample-15s.mp3",
  },
  {
    title: 'A Candle Visualization',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: 'https://samplelib.com/lib/preview/mp3/sample-15s.mp3',
  },
  {
    title: 'A Candle Visualization',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'https://samplelib.com/lib/preview/mp3/sample-15s.mp3',
  },
];
export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }
  state = {
    post: {},
  };
  componentDidMount() {
    const { audioId } = this.props.route.params;
    // console.log('////////////////////');
    // console.log(audioId);
    axios
      .get(`https://webtestview.com/hotpink/wp-json/wp/v2/posts/${audioId}`)
      .then((response) => {
        this.setState({ post: response.data });
      })
      .catch((error) => {
        // console.log(error);
      });
  }
  setDuration(data) {
    // // console.log(totalLength);
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    //// console.log(data);
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  onBack() {
    if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack - 1,
      }), 0);
    } else {
      this.refs.audioElement.seek(0);
      this.setState({
        currentPosition: 0,
      });
    }
  }

  onForward() {
    if (this.state.selectedTrack < TRACKS.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);
    }
  }



  render() {
    const { post } = this.state;
    let audioSrc;
    if (post && post.content) {
      const htmlString = post.content.rendered;
      const $ = cheerio.load(htmlString);
      audioSrc = $('audio').attr('src');
    }
    // console.log(audioSrc);
    let atitle;
    if (post && post.title) {
        atitle = post.title.rendered;
    }
    // console.log(atitle);
    
    // const htmlString = post.content.rendered;
    // const $ = cheerio.load(htmlString);
    // const audioSrc = $('audio').attr('src');
    // // console.log(audioSrc);
    
    const track = TRACKS[this.state.selectedTrack];
    const video = this.state.isChanging ? null : (
      <Video source={{uri: audioSrc}} // Can be a URL or a local file.
        ref="audioElement"
        paused={this.state.paused}               // Pauses playback entirely.
        resizeMode="cover"           // Fill the whole screen at aspect ratio.
        repeat={true}                // Repeat forever.
        onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)}    // Callback when video loads
        onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
        onEnd={this.onEnd}           // Callback when playback finishes
        onError={this.videoError}    // Callback when video cannot be loaded
        style={styles.audioElement} />
    );

    return (
      <>
      
      <CHeader
        
        style={{backgroundColor:'#E83B55', color:'#fff'}}
        titleComponent={
          <View style={[cStyles.row_justify_center, cStyles.flex_full]}>
            <View
              style={[
                cStyles.column_align_center,
                cStyles.column_justify_center,
                { width: '100%' },
              ]}>
              <CImage
                style={{width:90, height:40}}
                source={Assets.log}
                resizeMode={'contain'}
              />
            </View>
          </View>
        }
        iconLeft_1={'chevron-left'}
        iconRight_1={'none'}
        
         onPressLeft_1={() => this.props.navigation.goBack()}
        
      />
      <View style={styles.container}>
        <ImageBackground source={Assets.abg} resizeMode="cover" imageStyle={{borderRadius:25, borderTopLeftRadius:25, borderTopRightRadius:25,  borderTopWidth:5, borderColor:'#fff'}} style={{flex:1, borderTopColor:'#fff', borderTopLeftRadius:25, borderTopRightRadius:25, borderTopWidth:2,} }>
          
                    
            <AlbumArt url={track.albumArtUrl} />
            <TrackDetails title={atitle} artist={track.artist} />
            <Controls
              onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
              repeatOn={this.state.repeatOn}
              shuffleOn={this.state.shuffleOn}
              forwardDisabled={this.state.selectedTrack === TRACKS.length - 1}
              onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
              onPressPlay={() => this.setState({paused: false})}
              onPressPause={() => this.setState({paused: true})}
              onBack={this.onBack.bind(this)}
              onForward={this.onForward.bind(this)}
              paused={this.state.paused}/>
            <SeekBar
              onSeek={this.seek.bind(this)}
              trackLength={this.state.totalLength}
              onSlidingStart={() => this.setState({paused: true})}
              currentPosition={this.state.currentPosition} />
            
            {video}
        
        </ImageBackground>
      </View>
      </>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#DD3B5B',
    paddingTop:40,
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};