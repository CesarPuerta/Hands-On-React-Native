import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateSelectedUserPhoto } from 'home/store/actions';

import styles from './styles';

export class Camera extends PureComponent {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      const base64 = `data:image/jpeg;base64, ${data.base64}`;
      const {
        dispatchUpdateSelectedUserPhoto,
        navigation: { goBack }
      } = this.props;
      dispatchUpdateSelectedUserPhoto(base64);
      goBack();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel'
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel'
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={styles.buttonTextSize}> Take </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Camera.propTypes = {
  dispatchUpdateSelectedUserPhoto: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  dispatchUpdateSelectedUserPhoto: updateSelectedUserPhoto
};

export default connect(null, mapDispatchToProps)(Camera);
