import React, { PureComponent } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsersDetails, setSelectedUser } from 'home/store/actions';

import styles from './styles';

export class UsersdDetails extends PureComponent {
  componentDidMount() {
    const { dispatchFetchUsers, page } = this.props;
    dispatchFetchUsers(page);
  }

  handleRefresh = () => {
    const { dispatchFetchUsers } = this.props;
    dispatchFetchUsers(1);
  };

  handleLoadMore = () => {
    const { dispatchFetchUsers, page } = this.props;
    dispatchFetchUsers(page + 1);
  };

  handleItemClick = item => {
    const {
      dispatchSetSelectedUser,
      navigation: { navigate }
    } = this.props;
    dispatchSetSelectedUser(item.email);
    navigate('UserDetails');
  };

  render() {
    const { usersDetails, requestInProgress } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {usersDetails && (
          <FlatList
            data={usersDetails}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={item.name.last}
                subtitle={item.email}
                leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                chevron={{ color: 'black' }}
                bottomDivider
                onPress={() => this.handleItemClick(item)}
              />
            )}
            keyExtractor={user => user.cell}
            scrollEnabled={!requestInProgress}
            refreshing={requestInProgress}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        )}
      </SafeAreaView>
    );
  }
}

UsersdDetails.propTypes = {
  dispatchFetchUsers: PropTypes.func.isRequired,
  dispatchSetSelectedUser: PropTypes.func.isRequired,
  requestInProgress: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired
};

const mapDispatchToProps = {
  dispatchFetchUsers: fetchUsersDetails,
  dispatchSetSelectedUser: setSelectedUser
};

const mapStateToProps = ({ usersDetails }) => ({
  usersDetails: usersDetails.usersData,
  page: usersDetails.pagination.page,
  requestInProgress: usersDetails.requestInProgress
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersdDetails);
