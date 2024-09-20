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
      router.replace('/splash');
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
        <Stack.Screen name="SellTrading" options={{ headerShown: false }} />
        <Stack.Screen name="BuyTrading" options={{ headerShown: false }} />
        <Stack.Screen name="BuyCryptoScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SellCryptoScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SellBtc" options={{ headerShown: false }} />
        <Stack.Screen name="BuyBtc" options={{ headerShown: false }} />
        <Stack.Screen name="BuyEthereum" options={{ headerShown: false }} />
        <Stack.Screen name="CompletePaymentScreen" options={{ headerShown: false }} />
        <Stack.Screen name="BureauDeChange" options={{ headerShown: false }} />
        <Stack.Screen name="SelectCountry" options={{ headerShown: false }} />
        <Stack.Screen name="SelectGiftCard" options={{ headerShown: false }} />
        <Stack.Screen name="CardScreen" options={{ headerShown: false }} />
        <Stack.Screen name="PaymentOption" options={{ headerShown: false }} />
        <Stack.Screen name="CreditCard" options={{ headerShown: false }} />
        <Stack.Screen name="PaymentVerification" options={{ headerShown: false }} />
        <Stack.Screen name="PaymentVerified" options={{ headerShown: false }} />
        <Stack.Screen name="SellGiftcard" options={{ headerShown: false }} />
        <Stack.Screen name="TradeSummary" options={{ headerShown: false }} />
        <Stack.Screen name="GiftcardSuccess" options={{ headerShown: false }} />
        <Stack.Screen name="TransferPin" options={{ headerShown: false }} />
        <Stack.Screen name="TransferToSwiftpay" options={{ headerShown: false }} />
        <Stack.Screen name="Receipt" options={{ headerShown: false }} />
        <Stack.Screen name="Beneficiaries" options={{ headerShown: false }} />
        <Stack.Screen name="SendToBeneficiary" options={{ headerShown: false }} />
        <Stack.Screen name="SingleBankTransfer" options={{ headerShown: false }} />
        <Stack.Screen name="Report" options={{ headerShown: false }} />
        <Stack.Screen name="MultipleBankTransfer" options={{ headerShown: false }} />
        <Stack.Screen name="AllMultipleBanks" options={{ headerShown: false }} />
        <Stack.Screen name="MultipleTransferSummary" options={{ headerShown: false }} />
        <Stack.Screen name="MultipleSwiftpayTransfer" options={{ headerShown: false }} />
        <Stack.Screen name="AllMultipleSwiftpay" options={{ headerShown: false }} />
        <Stack.Screen name="MultipleSwiftpaySummary" options={{ headerShown: false }} />
        <Stack.Screen name="SaveNow" options={{ headerShown: false }} />
        <Stack.Screen name="SaveWithInterest" options={{ headerShown: false }} />
        <Stack.Screen name="SavingsDetails" options={{ headerShown: false }} />
        <Stack.Screen name="CreateSavings" options={{ headerShown: false }} />
        <Stack.Screen name="Transactions" options={{ headerShown: false }} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} />
        <Stack.Screen name="Document" options={{ headerShown: false }} />
        <Stack.Screen name="KycLevelOne" options={{ headerShown: false }} />
        <Stack.Screen name="KycLevelTwo" options={{ headerShown: false }} />
        <Stack.Screen name="KycLevelThree" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
