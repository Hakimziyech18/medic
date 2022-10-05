import { NavigationContainer} from '@react-navigation/native';
import { StackNavigation } from './infrastructure/navigation/StackNav';
import { DefaultTheme } from '@react-navigation/native';
import { AppProvider } from './infrastructure/Globals/Appcontext';

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
}
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer theme={theme}>
        <StackNavigation/>
      </NavigationContainer>
    </AppProvider>
  )
}
