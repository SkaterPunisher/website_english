'use client'

import styles from './Form.module.scss'
import Btn from '@/components/ui/Btn/Btn'
import Heading from '@/components/ui/Heading/Heading'
import { formApplication, formApplicationForTeacher } from '@/constants/formApplication'
import Text from '@/components/ui/Text/Text'
import { FieldInput } from '@/components/ui/FieldInput'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FlagIcon from '@/icons/falg.svg'
import axios from 'axios'
import { showToast } from '@/components/ui/CustomToast/CustomToast'
import cn from 'classnames'

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

const Form = ({ forTeachersPage, page }: { forTeachersPage?: boolean; page: string }) => {
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
    let message = `<b>Заявка с Advanced English</b> \n`
    message += `<b>Отправлено со страницы :</b> ${page} \n`
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
    <section className={cn(styles.section, 'layout')}>
      <div className={styles.wrapper}>
        <Heading tag="h2" className={styles.heading}>
          {forTeachersPage ? (
            <>
              Затрудняетесь с выбором <br /> преподавателя?
            </>
          ) : (
            <>
              Запишитесь на бесплатный <br /> вводный урок
            </>
          )}
        </Heading>

        <div className={styles.content}>
          <ul className={styles.advantages}>
            {(forTeachersPage ? formApplicationForTeacher : formApplication).map(item => (
              <li key={item.id} className={styles.item}>
                <div className={styles.icon}>
                  <Text size="s">{item.id}</Text>
                </div>
                <Text size="s">{item.title}</Text>
              </li>
            ))}
          </ul>

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
              {forTeachersPage ? 'Оставить заяку' : 'Записаться'}
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

export default Form
