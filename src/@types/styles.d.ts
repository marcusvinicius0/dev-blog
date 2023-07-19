
import 'styled-components';
import { defaultTheme } from "../styles/themes/default";

// guardando os valores gerados "automaticos" pelo ts dentro desse type ThemeType
type ThemeType = typeof defaultTheme;

// criando uma tipagem para o modulo styled components do npm
// estamos sobrescrevendo algo já existente. Se não estivessemos importanto o 
//styled components a gente estaria criando do zero
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}