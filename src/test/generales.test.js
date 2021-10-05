describe('Probando Jest', () => {
    test('Prueba de Objetos iguales', () => {
        const datos1 = {
            nombre: 'Jesus Martinez',
            edad: 28,
        };
        const datos2 = {
            nombre: 'Jesus Martinez',
            edad: 28,
        };
        expect(dartos1).toequal(datos2);
    });
});
