import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  text: {
    flex: 1,
    flexGrow: 2,
    fontSize: 12,
    paddingHorizontal: 15
  },
  buttonContainer: {
    flex: 1,
    flexGrow: 2,
    alignItems: 'center'
  },
  image: {
    minWidth: 130,
    minHeight: 300
  },
  name: {
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  inline: {
    display: 'flex',
    flexDirection: 'row'
  },
  bold: {
    fontWeight: 'bold'
  }
});
