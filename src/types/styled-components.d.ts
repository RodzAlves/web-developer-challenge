import type { TypeTheme } from '@/styles';

// Type inference

declare module 'styled-components' {
  export interface DefaultTheme extends TypeTheme {}
}
