'use client'

import { TeacherSmallCardsProps } from './TeacherSmallCards.props'
import { useTeacherTagsStore } from '@/stores/teacherTags'
import { Teacher } from '@/sanity/schemas/teacher-schema/teacherTypes'
import TeacherSmallCard from './TeacherSmallCard/TeacherSmallCard'
import { motion } from 'framer-motion'

const listVariants = {
  initial: { opacity: 0, x: -10 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
}

const TeacherSmallCards = ({ teachers, className, ...props }: TeacherSmallCardsProps) => {
  const { tag: tags } = useTeacherTagsStore()

  const filterTeacherByTags = (teacher: Teacher) => {
    // Если тег не выбран, возвращаем все статьи
    if (tags === '') return true

    // Проверяем, есть ли пересечение между тегами статьи и выбранными тегами
    return teacher.teaches.some(tag => tag.name === tags)
  }

  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={listVariants}>
      {teachers?.filter(filterTeacherByTags).map(teacher => (
        <motion.div
          key={teacher._id}
          variants={listVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <TeacherSmallCard key={teacher._id} teacher={teacher} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TeacherSmallCards
