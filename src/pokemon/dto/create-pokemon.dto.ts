import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsPositive({ message: `el valor para el campo 'no' debe ser positivo` })
  @IsInt({ message: `el valor para el campo 'no' no es un numero valido` })
  @Min(1, { message: `el valor minimo para el campo 'no' es 1` })
  no: number;

  @IsString({
    message: `El valor proporcionado para el campo 'name' no es valido`,
  })
  @MinLength(1, {
    message: `El tamño minimo de caracteres para el campo 'name' es de 1`,
  })
  name: string;
}
