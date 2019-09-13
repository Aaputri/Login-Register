
import Login from './Screen/Login'
const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
});

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

