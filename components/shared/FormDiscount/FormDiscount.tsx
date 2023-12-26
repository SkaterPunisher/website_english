'use client'

import styles from './FormDiscount.module.scss'
import cn from 'classnames'
import Btn from '@/components/ui/Btn/Btn'
import Text from '@/components/ui/Text/Text'
import { FieldInput } from '@/components/ui/FieldInput'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { showToast } from '@/components/ui/CustomToast/CustomToast'
import { CustomLink } from '@/components/ui/CustomLink/CustomLink'
import { FormDiscountProps } from './FormDiscount.props'

const TOKEN = process.env.TOKEN
const CHAT_ID = process.env.CHAT_ID
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

type Form = {
  firstName: string
  phone: string
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
})

const FormDiscount = ({ className, ...props }: FormDiscountProps) => {
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
    let message = `<b>Заявка со скидкой 10% с Advanced English</b> \n`
    message += `<b>Имя :</b> ${data.firstName} \n`
    message += `<b>Телефон :</b> ${data.phone} \n`

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
    <div className={className} {...props}>
      <div className={cn(styles.wrapper)}>
        <div className={styles.advantages}>
          <Text size="ll" className={styles.title}>
            Лучшая скидка в 10%
          </Text>
          <Text size="s">для новых учеников на все курсы</Text>
        </div>

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
          <Btn
            // disabled={!isDirty || !isValid}
            onClick={handleSubmit(onSubmit)}
            className={styles.button}
            color="black"
          >
            Записаться
          </Btn>

          <Text size="xxs" className={styles.text}>
            Нажимая "Записаться", вы принимаете условия{' '}
            <CustomLink className={styles.linkText} href="/privacy-advanced-english">
              политики конфиденциальности
            </CustomLink>
          </Text>
        </form>
      </div>
    </div>
  )
}

export default FormDiscount
