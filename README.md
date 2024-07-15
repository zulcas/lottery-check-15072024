# Comprobar lotería de Nueva York

Hemos implementado una app muy prqueña para comprobar los números de lotería de los sorteos de Nueva York (datos reales).

Analicemos juntos el JSON **lottery.json**

- ¿En qué propiedad del JSON tenemos los resultados de los sorteos?
- ¿Cómo podemos acceder a la fecha del sorteo?
- ¿Cómo podemos acceder a todos los números ganadores?

## Comprobar Los Números Premiados De Una Fecha Específica

1. Debemos realizar una llamada a la API y pasarle la fecha seleccionada por el usuario
2. La API debe buscar en el JSON los números premiados para esa fecha
3. En el DIV oculto #numbersResult debemos poner los números premiados para esa fecha. Deben ser 7

```
{
    "winningNumbers" = "1 2 3 4 11 22 33 44"
}
```

## Comprobar Tus Números

1. El usuario introduce una fecha y los números de su boleto separados por espacios
2. Debemos realizar una llamada a la API y pasarle los datos del punto anterior
3. La API debe devolver el número de aciertos y el premio obtenido. Por ejemplo su el usuario ha acertado todos los números.

{
    "winningNumbers" = "1 2 3 4 11 22 33 44",
    "matchNumbers": 7,
    "prize": 1000000
}

Fíjate que la relación de premios se ubica en el fichero **prizes.json**
