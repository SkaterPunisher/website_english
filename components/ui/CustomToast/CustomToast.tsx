import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SuccessIcon from '@/icons/alert-success.svg'
import ErrorIcon from '@/icons/alert-error-sircle.svg'
import styles from './CustomToast.module.scss'
import Text from '../Text/Text'

type TypeToast = 'success' | 'error' | 'warning'

const CustomToast = ({ type, message }: { type: TypeToast; message: string }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>
        {type === 'success' && (
          <div className={styles.icon}>
            <SuccessIcon />
          </div>
        )}
        {type === 'error' && (
          <div className={styles.icon}>
            <ErrorIcon />
          </div>
        )}
        <Text size="s" className={styles.messageText}>
          {message}
        </Text>
      </div>
    </div>
  )
}

export const showToast = (type: TypeToast, message: string) => {
  toast(<CustomToast type={type} message={message} />, {
    closeButton: false,
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 5000,
    style: {
      backgroundColor: 'var(--white)',
      borderRadius: '12px',
      boxShadow:
        '0px 12px 24px -3px rgba(28, 25, 23, 0.20), 0px 24px 48px -6px rgba(68, 64, 60, 0.22), 0px 48px 96px -12px rgba(121, 113, 107, 0.28)',
      padding: '12px',
    },
  })
}
