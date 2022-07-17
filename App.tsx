import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type AppState =
  | { tag: 'input'; message: string }
  | { tag: 'display'; message: string };

const App = () => {
  const [state, setState] = useState<AppState>({ tag: 'input', message: '' });

  const sendMessage = () => {
    setState({ tag: 'display', message: state.message });
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Atividade 1.2</Text>
          {state.tag === 'input' ? (
            <>
              <TextInput
                style={styles.textInput}
                value={state.message}
                onChangeText={value => setState({ ...state, message: value })}
                onSubmitEditing={sendMessage}
              />
              <Button title="Enviar" onPress={sendMessage} />
            </>
          ) : (
            <Text style={{ fontSize: 16 }}>{state.message}</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
    marginBottom: 8,
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
