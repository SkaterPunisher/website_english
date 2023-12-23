import dayjs from 'dayjs'
// Импортируем локализацию для русского языка
import 'dayjs/locale/ru'

export function formatDate(dateString: any) {
  // Устанавливаем локализацию
  dayjs.locale('ru')

  // Анализируем дату
  const date = dayjs(dateString)

  // Форматируем дату
  return date.format('D MMMM')
}
