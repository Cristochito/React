import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <Image
        source={require('@/assets/images/native.png')} // Asegúrate de ajustar la ruta de tu imagen
        style={styles.reactLogo} // Aplicar estilos a la imagen
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 600,
    width: 850,
    marginTop: 20, 
    resizeMode: 'contain', 
  },
});
