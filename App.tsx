/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { useCameraDevice, Camera, useCameraPermission, useFrameProcessor } from 'react-native-vision-camera';



function App(): React.JSX.Element {
  const device = useCameraDevice('front');
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, [requestPermission]);

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    console.log(`Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`);
  }, []);

  if (!hasPermission) { return <Text>No Permission</Text>; }
  if (device == null) { return <Text>No Device</Text>; }
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
    />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


export default App;
