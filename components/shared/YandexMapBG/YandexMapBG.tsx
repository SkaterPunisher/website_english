import styles from './YandexMapBG.module.scss'

const YandexMapBG = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?filter=language%3Aenglish_language&ll=43.521247%2C56.106319&mode=search&oid=1615779020&ol=biz&sctx=ZAAAAAgBEAAaKAoSCY1iuaXVAEZAEcmutIzUKUxAEhIJBmSvd3885j8RIJxPHauU0j8iBgABAgMEBSgKOABAzYkGSAFqAnJ1ggEZbGFuZ3VhZ2U6ZW5nbGlzaF9sYW5ndWFnZZ0BzcxMPaABAKgBAL0Bhfc4aMIBc5CJzYZFxZjfjOsCuqLWqQT51bCjBIun6M7jA8bbm91T%2Fq%2Fn2AStssfr8gX9ufLS7QSWnbXVjgeJxPm7swP636msBruM1fiWAsz3hqQE1uTpiHvHzrKOBOuO3pZ6kLnepPsE957KmN4F46XO1imI%2FobylgPqAQDyAQD4AQCCAh3QsNC90LPQu9C40LnRgdC60LjQuSDRj9C30YvQuooCCTE4NDEwNjE2MJICAJoCDGRlc2t0b3AtbWFwc6oCSTg5OTE1OTk3NTksMzk2NzkzMTUzMzQsMjQ1MDkwMTM1OTg5LDIzNTA5ODY3NDE4OCwzOTAwNjk0NTcwMSwxMTQ4NzI4MDM0NTc%3D&sll=43.521247%2C56.106319&sspn=0.347443%2C0.145844&text=%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D1%8F%D0%B7%D1%8B%D0%BA&z=17"
        allowFullScreen={true}
        className={styles.map}
      ></iframe>
    </div>
  )
}

export default YandexMapBG
