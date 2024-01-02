'use client'

import styles from './FormCart.module.scss'
import Btn from '@/components/ui/Btn/Btn'
import Heading from '@/components/ui/Heading/Heading'
import Text from '@/components/ui/Text/Text'
import { FieldInput } from '@/components/ui/FieldInput'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FlagIcon from '@/icons/falg.svg'
import axios from 'axios'
import { showToast } from '@/components/ui/CustomToast/CustomToast'
import useCartStore from '@/stores/cart.store'

const TOKEN = process.env.TOKEN
const CHAT_ID = process.env.CHAT_ID
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

type Form = {
  firstName: string
  phone: string
  email: string
}

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'Минимальная длина имени 3 символа' })
    .max(40, { message: 'Максимальная длина имени 40 символов' }),
  phone: z
    .string()
    .nonempty({ message: 'Телефон обязательно' })
    .min(18, { message: 'Введите полный номер' }),
  email: z
    .string()
    .nonempty({ message: 'Email обязательно' })
    .email({ message: 'Не корректный email' }),
})

const FormCart = () => {
  const { items } = useCartStore()

  const {
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
    reset,
  } = useForm<Form>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: Form) => {
    const courseDetails = items.map((item, index) => {
      return `${index + 1}. Курс: ${item.course.title}, Период: ${item.type.period}, Цена: ${
        item.type.price
      }`
    })

    let message = `<b>Заявка из корзины с Advanced English</b> \n`
    message += `<b>Имя :</b> ${data.firstName} \n`
    message += `<b>Телефон :</b> ${data.phone} \n`
    message += `<b>Почта :</b> ${data.email} \n`
    message += `<b>Корзина :</b>\n${courseDetails.join('\n')}\n`

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      })
      .then(res => {
        showToast('success', 'Спасибо! Заявка отправлена. Мы свяжемся с Вами в ближайшие 15 минут!')
      })
      .catch(err => {
        showToast('error', `Произошла ошибка. Попробуйте позже. ${err.message}`)
      })

    reset()
  }

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <Heading tag="h2">Оставьте заявку</Heading>
          <Text size="s">
            Ответим на вопросы, зафиксируем ключевые <br /> цели изучения языка
          </Text>
        </div>

        <div className={styles.content}>
          <form className={styles.form}>
            <Controller
              control={control}
              name="firstName"
              render={({
                field: { name, value, onChange, onBlur, ref },
                fieldState: { invalid, error },
              }) => (
                <FieldInput
                  type="text"
                  autoComplete="off"
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  isRequired={true}
                  isInvalid={!!error || invalid}
                  error={error && error.message}
                  labelShow={true}
                  placeholder="Имя"
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({
                field: { name, value, onChange, onBlur, ref },
                fieldState: { invalid, error },
              }) => (
                <FieldInput
                  type="email"
                  autoComplete="on"
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  isRequired={true}
                  isInvalid={!!error || invalid}
                  error={error && error.message}
                  labelShow={true}
                  placeholder={'Email'}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({
                field: { name, value, onChange, onBlur, ref },
                fieldState: { invalid, error },
              }) => (
                <FieldInput
                  type="tel"
                  autoComplete="off"
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  isRequired={true}
                  isInvalid={!!error || invalid}
                  error={error && error.message}
                  labelShow={true}
                  placeholder="+7 ("
                />
              )}
            />
            <Btn onClick={handleSubmit(onSubmit)} className={styles.button} color="black">
              Оставить заяку
            </Btn>
          </form>
        </div>

        <div className={styles.flag}>
          <FlagIcon />
        </div>
      </div>
    </section>
  )
}

export default FormCart
