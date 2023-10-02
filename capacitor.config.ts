import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tebi.app',
  appName: 'tebi-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
