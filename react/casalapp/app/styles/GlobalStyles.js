import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  subheading: {
    fontSize: 16,
    color: '#71727a',
    marginBottom: 32,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  textInput: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d1d6',
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  primaryButton: {
    backgroundColor: '#006ffd',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

export default globalStyles;