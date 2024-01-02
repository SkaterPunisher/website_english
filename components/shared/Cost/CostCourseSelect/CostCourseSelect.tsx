'use client'

import { CostCourseSelectProps } from './CostCourseSelect.props'
import styles from './CostCourseSelect.module.scss'
import cn from 'classnames'
import Text from '@/components/ui/Text/Text'
import { Button, DialogTrigger, Popover } from 'react-aria-components'
import ArrowDownIcon from '@/icons/chevron-down.svg'
import { useCostCoursesStore } from '@/stores/costCourses.store'

const CostCourseSelect = ({
  single,
  forCostPage,
  courses,
  className,
  ...props
}: CostCourseSelectProps) => {
  const { course, setCourse } = useCostCoursesStore()

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Text size="s">
        {forCostPage
          ? 'Курсы построены исходя из нашего опыта, вы можете выбрать любой подходящи тариф, по которому будет удобно заниматься'
          : 'Какой курс вы хотите изучать? '}
      </Text>

      {!forCostPage && (
        <div className={cn(styles.tagsList)}>
          <DialogTrigger>
            <Button
              className={cn(styles.button, {
                [styles.selected]: course,
              })}
            >
              <Text size="s" className={styles.text}>
                {course ? course.title : 'Выберите курс'}
              </Text>
              <ArrowDownIcon className={styles.icon} />
            </Button>

            <Popover
              className={cn(styles.popover, {
                [styles.single]: single,
                [styles.singleNo]: !single,
              })}
            >
              <div className={cn(styles.contentWrapper)}>
                <ul className={styles.tags}>
                  {courses?.map(t => (
                    <li key={t._id} className={styles.item} onClick={() => setCourse(t)}>
                      <div className={styles.text}>
                        <Text
                          size="s"
                          className={cn(styles.tag, { [styles.active]: t.title === course?.title })}
                        >
                          {t.title.trim()}
                        </Text>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Popover>
          </DialogTrigger>
        </div>
      )}
    </div>
  )
}

export default CostCourseSelect
