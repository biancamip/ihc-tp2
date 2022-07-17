import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

type AccelerometerValues = { x: number; y: number; z: number };
type AppState =
  | { tag: 'detecting'; values: AccelerometerValues }
  | { tag: 'message' };

const App = () => {
  const [state, setState] = useState<AppState>({
    tag: 'detecting',
    values: { x: 0, y: 0, z: 0 },
  });

  setUpdateIntervalForType(SensorTypes.accelerometer, 750);

  useEffect(() => {
    const accSubscription = accelerometer.subscribe(({ x, y, z }) => {
      if (state.tag === 'message') return;

      let hasChange = x > 1 || y > 10 || z > 1;
      if (hasChange) {
        setState({ tag: 'message' });
      } else {
        setState({ ...state, values: { x, y, z } });
      }
    });

    return accSubscription.unsubscribe;
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Atividade 1.3</Text>
          {state.tag === 'detecting' ? (
            <>
              <Text style={styles.textInput}>{state.values?.x ?? 0}</Text>
              <Text style={styles.textInput}>{state.values?.y ?? 0}</Text>
              <Text style={styles.textInput}>{state.values?.z ?? 0}</Text>
            </>
          ) : (
            <MessageView message="Mudança de acelerômetro detectada" />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MessageView = ({ message }: { message: string }) => {
  return <Text style={{ fontSize: 16 }}>{message}</Text>;
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    marginTop: 4,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
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
