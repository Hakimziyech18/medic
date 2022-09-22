import { NavigationContainer} from '@react-navigation/native';
import { StackNavigation } from './infrastructure/navigation/StackNav';
import { ProviderHome } from './infrastructure/screens/providers/ProviderHome';


export default function App() {
  return (
    // <NavigationContainer>
    //   <StackNavigation/>
    // </NavigationContainer>
    <ProviderHome/>
  )
}
