/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const app = new App()


// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('App', () => app);
