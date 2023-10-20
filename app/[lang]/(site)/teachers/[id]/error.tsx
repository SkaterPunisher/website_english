'use client'

import Link from 'next/link'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.log(error)

  return (
    <div>
      Ошибка: {error.message}
      <button onClick={() => reset()}>Попробовать снова</button>
      <Link href="/">На главную</Link>
    </div>
  )
}
