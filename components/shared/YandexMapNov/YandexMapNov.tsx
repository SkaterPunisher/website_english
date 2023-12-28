import styles from './YandexMapNov.module.scss'

const YandexMapNov = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?filter=language%3Aenglish_language&ll=43.882691%2C56.203987&mode=search&oid=1703571450&ol=biz&sctx=ZAAAAAgBEAAaKAoSCY1iuaXVAEZAEcmutIzUKUxAEhIJBmSvd3885j8RIJxPHauU0j8iBgABAgMEBSgKOABA1%2FcISAFqAnJ1ggEZbGFuZ3VhZ2U6ZW5nbGlzaF9sYW5ndWFnZZ0BzcxMPaABAKgBAL0Bhfc4aOoBAPIBAPgBAIICHdCw0L3Qs9C70LjQudGB0LrQuNC5INGP0LfRi9C6igIJMTg0MTA2MTYwkgIAmgIMZGVza3RvcC1tYXBzqgJJODk5MTU5OTc1OSwzOTY3OTMxNTMzNCwyNDUwOTAxMzU5ODksMjM1MDk4Njc0MTg4LDM5MDA2OTQ1NzAxLDExNDg3MjgwMzQ1Nw%3D%3D&sll=43.882691%2C56.203987&sspn=0.005543%2C0.002323&text=%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D1%8F%D0%B7%D1%8B%D0%BA&z=17.97"
        allowFullScreen={true}
        className={styles.map}
      ></iframe>
    </div>
  )
}

export default YandexMapNov
