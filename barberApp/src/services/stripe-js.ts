import { StripeProvider } from '@stripe/stripe-react-native';

export function getStripeJs() {
  const stripePromise = new Promise((resolve) => {
    resolve({
      publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
    });
  });

  return stripePromise;
}