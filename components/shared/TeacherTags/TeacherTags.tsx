'use client'

import { TeacherTagsProps } from './TeacherTags.props'
import styles from './TeacherTags.module.scss'
import cn from 'classnames'
import Text from '@/components/ui/Text/Text'
import { Button, DialogTrigger, Popover } from 'react-aria-components'
import ArrowDownIcon from '@/icons/chevron-down.svg'
import { useTeacherTagsStore } from '@/stores/teacherTags'

const TeacherTags = ({ tags, className, ...props }: TeacherTagsProps) => {
  const { tag, setTags } = useTeacherTagsStore()

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div className={cn(styles.tagsList)}>
        <DialogTrigger>
          <Button
            className={cn(styles.button, {
              [styles.selected]: tag,
            })}
          >
            <Text size="s" className={styles.text}>
              {tag ? tag : 'Специализация'}
            </Text>
            <ArrowDownIcon className={styles.icon} />
          </Button>

          <Popover className={styles.popover}>
            <div className={cn(styles.contentWrapper)}>
              <ul className={styles.tags}>
                <li className={styles.item} onClick={() => setTags('')}>
                  <div className={styles.text}>
                    <Text size="s" className={cn(styles.tag, { [styles.active]: tag === '' })}>
                      Все
                    </Text>
                  </div>
                </li>
                {tags.map(t => (
                  <li key={t._id} className={styles.item} onClick={() => setTags(t.name)}>
                    <div className={styles.text}>
                      <Text
                        size="s"
                        className={cn(styles.tag, { [styles.active]: t.name === tag })}
                      >
                        {t.name.trim()}
                      </Text>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Popover>
        </DialogTrigger>
      </div>
    </div>
  )
}

export default TeacherTags
