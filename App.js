import { NavigationContainer} from '@react-navigation/native';
import { StackNavigation } from './infrastructure/navigation/StackNav';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}
