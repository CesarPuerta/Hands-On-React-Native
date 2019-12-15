import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { setSelectedUser } from 'home/store/actions';

import styles from './styles';

export class UserDetails extends PureComponent {
  componentWillUnmount() {
    const { dispatchSetSelectedUser } = this.props;
    dispatchSetSelectedUser(null);
  }

  onPressPictureButton = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate('Camera');
  };

  render() {
    const {
      selectedUser: {
        gender,
        email,
        cell,
        name: { title, first, last },
        location: { country, city },
        picture: { large }
      }
    } = this.props;
    return (
      <View style={styles.detailsContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: large }} />
        </View>
        <View style={styles.text}>
          <Text style={styles.name}>
            {title}. {last}
          </Text>
          <View style={styles.inline}>
            <Text style={styles.bold}>Name: </Text>
            <Text>
              {last}, {first}
            </Text>
          </View>
          <View style={styles.inline}>
            <Text style={styles.bold}>Gender: </Text>
            <Text>{gender}</Text>
          </View>
          <View style={styles.inline}>
            <Text style={styles.bold}>Location: </Text>
            <Text>
              {country} - {city}
            </Text>
          </View>

          <View style={styles.inline}>
            <Text style={styles.bold}>Cell phone: </Text>
            <Text>{cell}</Text>
          </View>

          <View style={styles.inline}>
            <Text style={styles.bold}>Email: </Text>
            <Text>{email}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onPressPictureButton}>
            <Icon name={'add-a-photo'} size={55} color={'black'} style={styles.icon} />
          </TouchableOpacity>
          <Text>Upload New Picture</Text>
        </View>
      </View>
    );
  }
}

UserDetails.propTypes = {
  dispatchSetSelectedUser: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  dispatchSetSelectedUser: setSelectedUser
};

const mapStateToProps = ({ usersDetails }) => ({
  selectedUser: usersDetails.selectedUser
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
