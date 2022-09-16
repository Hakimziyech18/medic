import { NavigationContainer} from '@react-navigation/native';
import { StackNavigation } from './infrastructure/navigation/StackNav';
import { Home } from './infrastructure/screens/Home';
import { Services } from './infrastructure/screens/Services';


export default function App() {
  return (
    // <NavigationContainer>
    //   <StackNavigation/>
    // </NavigationContainer>
    <Services/>
  )
}
