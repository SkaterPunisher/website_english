export type CostTable = {
  time: string
  title: string
  icon: 1 | 3 | 6
  discount: number
  price: number
  singleForPass: boolean
  timeLesson: number
  format: string
  cancelLesson: number
  speaking: boolean
}

export const costTable: CostTable[] = [
  {
    time: '1 месяц',
    title: 'Тариф, чтобы попробовать занятия в студии',
    icon: 1,
    discount: 0,
    price: 1.05,
    singleForPass: false,
    timeLesson: 50,
    format: 'Оффлайн / Онлайн',
    cancelLesson: 0,
    speaking: false,
  },
  {
    time: '3 месяца',
    title: 'Средний уровень продолжительности для увлеченных',
    icon: 3,
    discount: 5,
    price: 1,
    singleForPass: false,
    timeLesson: 50,
    format: 'Оффлайн / Онлайн',
    cancelLesson: 2,
    speaking: false,
  },
  {
    time: '6 месяцев',
    title: 'Для тех кто нацелен на результат',
    icon: 6,
    discount: 10,
    price: 0.95,
    singleForPass: true,
    timeLesson: 50,
    format: 'Оффлайн / Онлайн',
    cancelLesson: 5,
    speaking: true,
  },
]

export const defaultPrice = {
  price: {
    group: 350,
    single: 800,
    pair: 650,
    mini: 500,
  },
}
