'use client'

import styles from './FormApplication.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Btn from '@/components/ui/Btn/Btn'
import { useApplicationStore } from '@/stores/application.store'
import Heading from '@/components/ui/Heading/Heading'
import { formApplication } from '@/constants/formApplication'
import Text from '@/components/ui/Text/Text'
import { FieldInput } from '@/components/ui/FieldInput'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FlagIcon from '@/icons/falg.svg'
import CloseIcon from '@/icons/close.svg'

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

const FormApplication = () => {
  const { isVisible, toggleApplicationForm } = useApplicationStore()

  const {
    handleSubmit,
    formState: { errors, isDirty, isValid },
    control,
    reset,
  } = useForm<Form>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const onSubmit = (data: Form) => {
    toggleApplicationForm()
    reset()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.overlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.wrapper}>
            <Heading tag="h2" className={styles.heading}>
              Запишитесь на бесплатный <br /> вводный урок
            </Heading>

            <div className={styles.content}>
              <ul className={styles.advantages}>
                {formApplication.map(item => (
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
                  disabled={!isDirty || !isValid}
                  onClick={handleSubmit(onSubmit)}
                  className={styles.button}
                  color="black"
                >
                  Записаться
                </Btn>
              </form>
            </div>

            <div className={styles.flag}>
              <FlagIcon />
            </div>

            <div className={styles.close} onClick={toggleApplicationForm}>
              <CloseIcon />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FormApplication
