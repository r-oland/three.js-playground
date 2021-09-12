import { ThemeTypes } from './theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
