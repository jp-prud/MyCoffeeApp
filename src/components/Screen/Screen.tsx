import {KeyboardAvoidingView, Platform} from 'react-native';

import {ActivityIndicator, Box, BoxProps} from '@components';
import {useAppTheme, useAppSafeArea} from '@hooks';

import {
  ScrollableViewContainer,
  ViewContainer,
} from './components/ScreenContainers';
import {ScreenHeader} from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  FooterComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  isLoading?: boolean;
  title?: string;
}

export function Screen({
  children,
  isLoading,
  canGoBack = false,
  scrollable = false,
  FooterComponent,
  style,
  title,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container =
    scrollable && !isLoading ? ScrollableViewContainer : ViewContainer;

  function renderLoadingScreenState() {
    if (!isLoading) {
      return;
    }

    return (
      <Box alignItems="center" justifyContent="center">
        <ActivityIndicator color="primary" size={48} />
      </Box>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          flex={1}
          justifyContent={isLoading ? 'center' : 'flex-start'}
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
              paddingHorizontal: 24,
            },
            style,
          ]}
          {...boxProps}>
          {!isLoading && (title || canGoBack) && (
            <ScreenHeader title={title} canGoBack={canGoBack} />
          )}

          {renderLoadingScreenState()}

          {!isLoading && children}
        </Box>
      </Container>

      {FooterComponent && !isLoading && <Box>{FooterComponent}</Box>}
    </KeyboardAvoidingView>
  );
}
