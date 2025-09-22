const mockDisplay = { value: '' };

document.getElementById = (id) => {
  if (id === 'display') {
    return mockDisplay;
  }
};

require('./calculadora');

describe('Testes da Calculadora', () => {

  beforeEach(() => {
    clearAll();
  });

  test('showDisplay deve adicionar um valor ao display', () => {
    showDisplay('1');
    showDisplay('+');
    showDisplay('2');
    expect(mockDisplay.value).toBe('1+2');
  });

  test('result deve calcular a expressão e mostrar o resultado', () => {
    mockDisplay.value = '10*2';
    result();
    expect(mockDisplay.value).toBe('20');
  });
  test('result deve mostrar "Error" para uma expressão inválida', () => {
    mockDisplay.value = '5++';
    result();
    expect(mockDisplay.value).toBe('Error');
  });

  test('clearAll deve limpar o display', () => {
    mockDisplay.value = '123';
    clearAll();
    expect(mockDisplay.value).toBe('');
  });
});
