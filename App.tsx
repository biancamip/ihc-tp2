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

type Inputs = { value1: string | null; value2: string | null };

const App = () => {
  const [inputs, setInputs] = useState<Inputs>({ value1: null, value2: null });
  const [result, setResult] = useState<number | null>(null);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Atividade 1.1</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="Insira o primeiro número"
            value={inputs.value1 ?? ''}
            onChangeText={ev => setInputs({ ...inputs, value1: ev })}
          />
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            placeholder="Insira o segundo número"
            value={inputs.value2 ?? ''}
            onChangeText={ev => setInputs({ ...inputs, value2: ev })}
          />
          <Button
            title="Somar"
            disabled={
              inputs.value1 === null ||
              inputs.value1 === '' ||
              inputs.value2 === null ||
              inputs.value2 === ''
            }
            onPress={() => {
              inputs.value1 !== null &&
                inputs.value2 !== null &&
                setResult(+inputs.value1 + +inputs.value2);
            }}
          />

          {result !== null && (
            <>
              <Text style={{ ...styles.sectionTitle, marginTop: 8 }}>
                Resultado
              </Text>
              <Text>{result}</Text>
            </>
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
