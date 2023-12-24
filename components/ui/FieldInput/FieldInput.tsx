'use client'

import styles from './FieldInput.module.scss'
import cn from 'classnames'
import EyeIcon from './eye.svg'
import { FieldError, Input, Label, TextField } from 'react-aria-components'
import { FieldInputProps } from './FieldInput.props'
import { ForwardedRef, forwardRef, useState } from 'react'
import { handleMaskedChange } from './inputMask'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { y: '0', opacity: 1 },
  exit: { y: '-100%', opacity: 0 },
}

export const FieldInput = forwardRef(
  (
    {
      type,
      autoComplete,
      name,
      value,
      onChange,
      onBlur,
      isRequired,
      isInvalid,
      error,
      labelShow = true,
      labelText,
      placeholder,
      helper,
      disabled,
      ...props
    }: FieldInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false)

    // Toggle the visibility of the password
    const togglePasswordVisibility = () => setPasswordVisible(prev => !prev)

    // Determine the actual input type based on whether the password is visible
    const inputActualType = type === 'password' && isPasswordVisible ? 'text' : type

    return (
      <TextField
        isDisabled={disabled}
        type={inputActualType}
        autoComplete={autoComplete}
        className={styles.field}
        name={name}
        value={value || ''}
        onChange={onChange}
        onBlur={onBlur}
        isRequired={isRequired}
        // Let React Hook Form handle validation instead of the browser.
        validationBehavior="aria"
        isInvalid={isInvalid}
      >
        <Label className={cn(styles.label, { [styles.labelShow]: !labelShow })}>{labelText}</Label>

        <div className={styles.inputWrapper}>
          {type === 'tel' ? (
            <Input
              className={cn(styles.input)}
              placeholder={placeholder}
              value={value}
              onChange={e => handleMaskedChange(e, onChange)}
              ref={ref}
            />
          ) : (
            <Input className={cn(styles.input)} placeholder={placeholder} ref={ref} />
          )}

          {type === 'password' && (
            <div
              className={cn(styles.passwordToggleIcon, {
                [styles.passwordToggleIconError]: error && error !== 'Required',
                [styles.passwordToggleIconLabelShow]: labelShow,
              })}
              onClick={togglePasswordVisibility}
            >
              <EyeIcon />
            </div>
          )}
        </div>

        {helper && <div className={styles.helper}>{helper}</div>}

        <AnimatePresence>
          {error && (
            <motion.div
              key="error"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }}
              className={styles.errorWrapper}
            >
              <FieldError className={styles.error}>
                {error === 'Required' ? 'Поле обязательное' : error}
              </FieldError>
            </motion.div>
          )}
        </AnimatePresence>

        {/* {error !== 'Required' && (
          <FieldError className={styles.error}>{error}</FieldError>
        )} */}
      </TextField>
    )
  },
)

FieldInput.displayName = 'FieldInput'
