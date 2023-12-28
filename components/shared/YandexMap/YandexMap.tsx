'use client'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import styles from './YandexMap.module.scss'
import { YandexMapProps } from './YandexMap.props'

const YandexMap = ({ center = [56.106319, 43.521247], zoom = 18 }: YandexMapProps) => {
  return (
    <YMaps>
      <div className={styles.wrapper}>
        <Map className={styles.map} defaultState={{ center, zoom }}>
          <Placemark geometry={center} />
        </Map>
      </div>
    </YMaps>
  )
}

export default YandexMap
