# Prueba Zielteck, candidato Raziel Martínez

## Descripción
La aproximación del punto medio arranca en dos valores iniciales (límite superior e inferior), los cuales serán sumados y divididos entre 2. 
El valor resultante se comparará al valor OBJETIVO; dependiendo del resultado de la operación, se ajustará el valor anterior más próximo al valor OBJETIVO. 

## Uso
Descargar los archivos en una misma carpeta y abrir index.html en el navegador.

## Análisis
Al realizar el ejercicio me di cuenta que había dos formas diferentes de alcanzar el resultado. Al implementar las dos formas me di cuenta que se alcanzaban resultados muy similares, además los 
dos se adaptaban al ejemplo de la descripción del problema por lo que decidi utilizar el más legible que fue comparar el resultado de cada iteración con el objetivo; si el resultado es mayor, actualizo el limite superior, si es menor, actualizo el límite inferior. 
El segundo método para alcanzar el resultado se encuentra comentado de igual manera.

## Pruebas realizadas en formato (Límite superior, Límite inferior, Objetivo, Error)

### 1 (100, 20, 52.5, 0.5)
| Iteración  | Valor 1   | Valor 2   | Resultado   |
|------------|-----------|-----------|-------------|
|      1     |    **100**    |    **20**     |    60       |
|      2     |     60    |    20     |    40       |
|      3     |     60    |    40     |    50       |
|      4     |     60    |    50     |    55       |
|      5     |     55    |    50     |    **52.5**     |

### 2 (211, 34, 93.5, 0.5)
| Iteración  | Valor 1   | Valor 2   | Resultado   |
|------------|-----------|-----------|-------------|
|      1     |   **211**     |    **34**     |    122.5    |
|      2     |   122.5   |    34     |    78.25    |
|      3     |   122.5   |   78.25   |    100.375  |
|      4     |   100.375 |   78.25   |    89.3125  |
|      5     |   100.375 |   89.3125 |    94.84375 |
|      6     |  94.84375 |   89.3125 |   92.078125 |
|      7     |  94.84375 | 92.078125 |  **93.4609375** |

### 3 (997, 19, 33, 1)
| Iteración  | Valor 1   | Valor 2   | Resultado   |
|------------|-----------|-----------|-------------|
|      1     |   **997** |    **19**     |    508      |
|      2     |   508     |    19     |    263.5    |
|      3     |   263.5   |    19     |    141.25   |
|      4     |   141.25  |    19     |    80.125   |
|      5     |   80.125  |    19     |    49.5625  |
|      6     |   49.5625 |    19     |  34.28125   |
|      7     |  34.28125 |    19     |  26.640625  |
|      8     |  34.28125 | 26.640625 |  30.4609375 |
|      9     |  34.28125 | 30.4609375| **32.37109375** |
