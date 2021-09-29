/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import i18next from './src/i18n';
// import App from './App';
// import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
