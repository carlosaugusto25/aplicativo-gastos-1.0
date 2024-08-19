import { StatusBar } from 'expo-status-bar';
import { 
  useFonts,
  Roboto_400Regular, 
  Roboto_700Bold, 
  Roboto_500Medium, 
  Roboto_300Light 
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { Loading } from './src/components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold, 
    Roboto_500Medium, 
    Roboto_300Light 
  });

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {fontsLoaded ? <AppRoutes /> : <Loading />}
      </NavigationContainer>
    </ThemeProvider>
  );
}

