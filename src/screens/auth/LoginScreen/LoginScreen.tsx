import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Box,
  TouchableOpacityBox,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {RootStackParamList} from '@routes';

import {LoginFormSchema, LoginFormSchemaTypes} from './loginFormSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, handleSubmit, formState} = useForm<LoginFormSchemaTypes>({
    resolver: zodResolver(LoginFormSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleClickLogin({email}: LoginFormSchemaTypes) {
    Alert.alert('email', email);
  }

  function handleClickNavigateToForgotPassword() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function handleClickNavigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen scrollable>
      <Text preset="headingLarge">Olá</Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Box gap="s20" mb="s10">
        <FormTextInput
          name="email"
          control={control}
          label="E-mail"
          placeholder="Digite seu e-mail"
        />

        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>

      <TouchableOpacityBox onPress={handleClickNavigateToForgotPassword}>
        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>
      </TouchableOpacityBox>

      <Box mt="s48" gap="s12">
        <Button
          text="Entrar"
          onPress={handleSubmit(handleClickLogin)}
          disabled={!formState.isValid}
        />
        <Button
          text="Criar conta"
          preset="outline"
          onPress={handleClickNavigateToSignUpScreen}
        />
      </Box>
    </Screen>
  );
}