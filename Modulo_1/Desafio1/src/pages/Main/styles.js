import { StyleSheet, Platform } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },
  headerTitle: {
    color: colors.title,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
