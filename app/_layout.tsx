import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import ScreenshotNotification from './ScreenshotNotification';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'splash',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.replace('/(tabs)');
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* ScreenshotNotification is outside the Stack */}
      <ScreenshotNotification />
      
      <Stack>
        <Stack.Screen name="splash" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="onbording1" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="OtpVerificationScreen" options={{ headerShown: false }} />
        <Stack.Screen name="VerifyPhone" options={{ headerShown: false }} />
        <Stack.Screen name="TransactionPinSetup" options={{ headerShown: false }} />
        <Stack.Screen name="Biometric" options={{ headerShown: false }} />
        <Stack.Screen name="QrCodeScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Transfer" options={{ headerShown: false }} />
        <Stack.Screen name="TransferScreen" options={{ headerShown: false }} />
        <Stack.Screen name="Rates" options={{ headerShown: false }} />
        <Stack.Screen name="AddMoney" options={{ headerShown: false }} />
        <Stack.Screen name="Notification" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding2" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding3" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding4" options={{ headerShown: false }} />
        <Stack.Screen name="ScreenshotNotification" options={{ headerShown: false }} />
        <Stack.Screen name="NoNetworkScreen" options={{ headerShown: false }} />
        <Stack.Screen name="AjoSavings" options={{ headerShown: false }} />
        <Stack.Screen name="Africa" options={{ headerShown: false }} />
        <Stack.Screen name="Abroad" options={{ headerShown: false }} />
        <Stack.Screen name="HardCurrency" options={{ headerShown: false }} />
        <Stack.Screen name="Stock" options={{ headerShown: false }} />
        <Stack.Screen name="AjoContribution" options={{ headerShown: false }} />
        <Stack.Screen name="Exchange" options={{ headerShown: false }} />
        <Stack.Screen name="TradingScreen" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
