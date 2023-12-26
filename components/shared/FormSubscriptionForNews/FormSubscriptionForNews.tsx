'use client'

import Container from '@/components/ui/Container/Container'
import styles from './FormSubscriptionForNews.module.scss'
import Text from '@/components/ui/Text/Text'
import Link from 'next/link'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Btn from '@/components/ui/Btn/Btn'
import axios from 'axios'
import { showToast } from '@/components/ui/CustomToast/CustomToast'
import { FieldInput } from '@/components/ui/FieldInput'

const TOKEN = process.env.TOKEN
const CHAT_ID = process.env.CHAT_ID
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

type Form = {
  email: string
}

const formSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email обязательно' })
    .email({ message: 'Не корректный email' }),
})

const FormSubscriptionForNews = () => {
  const {
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    control,
  } = useForm<Form>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: Form) => {
    let message = `<b>Подписка на новости с Advanced English</b> \n`
    message += `<b>Имя :</b> ${data.email} \n`

    axios
      .post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      })
      .then(res => {
        showToast('success', 'Спасибо! Подписка оформлена!')
      })
      .catch(err => {
        showToast('error', `Произошла ошибка. Попробуйте позже. ${err.message}`)
      })

    reset()
  }

  return (
    <Container className={styles.wrapper}>
      <Text size="l">Подписаться на рассылку новостей</Text>

      <form className={styles.form}>
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
        <Btn
          //   disabled={!isDirty || !isValid}
          onClick={handleSubmit(onSubmit)}
          className={styles.button}
          color="black"
        >
          Подписаться
        </Btn>
      </form>

      <Text size="xxs" className={styles.link}>
        Нажимая «Подписаться», вы принимаете условия{' '}
        <Link href="/privacy-advanced-english">политики конфиденциальности</Link>
      </Text>
    </Container>
  )
}

export default FormSubscriptionForNews
