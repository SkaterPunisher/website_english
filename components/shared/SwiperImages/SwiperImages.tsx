'use client'

import styles from './SwiperImages.module.scss'
import cn from 'classnames'
import { useRef, useState } from 'react'
import { SwiperImagesProps } from './SwiperImages.props'

import DefaultImages from '@/components/ui/DefaultImages/DefaultImages'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

const SwiperImages = ({ images }: SwiperImagesProps) => {
  const swiperRef = useRef<any>(null)

  // Функция для перехода к определенному слайду по индексу
  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
    }
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (images && goToSlide) {
      const { clientX, currentTarget } = event

      const rect = currentTarget.getBoundingClientRect()
      const xPos = clientX - rect.left // x position within the element
      const widthPortion = rect.width / images.length // поделите на количество слайдов

      const slideIndex = Math.min(Math.floor(xPos / widthPortion), images.length - 1)
      goToSlide(slideIndex)
    }
  }

  return (
    <div>
      {images?.length! > 0 ? (
        <div onMouseMove={handleMouseMove}>
          <Swiper
            onSwiper={swiper => {
              swiperRef.current = swiper // Сохраняем ссылку на экземпляр Swiper
            }}
            pagination={{
              clickable: true, // сделать буллеты кликабельными
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className={cn(styles.swiper, 'swiper')}
          >
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <DefaultImages
                  src={image.url!}
                  width={640}
                  height={850}
                  alt="preview image"
                  className={styles.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={styles.imageDefault}>
          <DefaultImages
            src={''}
            width={400}
            height={400}
            alt="preview image"
            className={styles.image}
          />
        </div>
      )}
    </div>
  )
}

export default SwiperImages
