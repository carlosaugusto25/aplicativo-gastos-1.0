import { StatusBar } from 'expo-status-bar';
import { 
  useFonts,
  Roboto_400Regular, 
  Roboto_700Bold, 
  Roboto_500Medium, 
  Roboto_300Light 
} from '@expo-google-fonts/roboto';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold, 
    Roboto_500Medium, 
    Roboto_300Light 
  });

  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoaded ? <Home /> : <Loading/>
      }
    </ThemeProvider>
  );
}

