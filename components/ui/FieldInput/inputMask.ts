const applyMask = (value: string): string => {
  // Удалить все символы кроме цифр
  const numericValue = value.replace(/\D/g, '');

  // Проверяем, начинается ли строка с "7" и удаляем эту "7", если это так
  const cleanedValue = numericValue.startsWith('7')
    ? numericValue.slice(1)
    : numericValue;

  // Начальный шаблон маски
  let maskedValue = '+7 (';

  // Применить цифры к маске
  for (let i = 0; i < cleanedValue.length && i < 10; i++) {
    if (i === 3) {
      maskedValue += ') ';
    } else if (i === 6 || i === 8) {
      maskedValue += '-';
    }
    maskedValue += cleanedValue[i];
  }

  return maskedValue;
};

export const handleMaskedChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  onChange?: (value: string) => void,
) => {
  // Получить текущее значение поля ввода
  const { value } = event.target;

  // Применить маску к значению
  const maskedValue = applyMask(value);

  // Обновить состояние с маскированным значением
  if (onChange) onChange(maskedValue);
};
