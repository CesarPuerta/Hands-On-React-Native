import Reactotron, {
  asyncStorage,
  networking,
  trackGlobalErrors,
  openInEditor
} from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

const reactotron = Reactotron.configure({ name: 'HandsOn' })
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .use(sagaPlugin())
  .use(asyncStorage())
  .use(networking())
  .use(trackGlobalErrors())
  .use(openInEditor())
  .connect();

export default reactotron;
