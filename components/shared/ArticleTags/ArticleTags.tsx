'use client'

import { ArticleTagsProps } from './ArticleTags.props'
import styles from './ArticleTags.module.scss'
import cn from 'classnames'
import Text from '@/components/ui/Text/Text'
import { useTagsStore } from '@/stores/tags.store'
import { Button, DialogTrigger, Popover } from 'react-aria-components'
import ArrowDownIcon from '@/icons/chevron-down.svg'

const ArticleTags = ({ tags, className, ...props }: ArticleTagsProps) => {
  const { tags: allTags, addTags } = useTagsStore()

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Text size="s" className={cn(styles.text, styles.desktop)}>
        Выберите что вас больше интересует
      </Text>

      <div className={cn(styles.tags, styles.desktop)}>
        {tags.map(tag => (
          <Text
            key={tag._id}
            size="s"
            className={cn(styles.tag, { [styles.active]: allTags.includes(tag.tag) })}
            onClick={() => addTags(tag.tag)}
          >
            #{tag.tag.trim()}
          </Text>
        ))}
      </div>

      <div className={cn(styles.tagsList, styles.mobile)}>
        <DialogTrigger>
          <Button
            className={cn(styles.button, {
              [styles.selected]: allTags && allTags.length > 0,
            })}
          >
            <Text size="s" className={styles.text}>
              {allTags.length
                ? allTags.map(tag => `# ${tag.trim().toLowerCase()}`).join(', ')
                : 'Выберите темы'}
            </Text>
            <ArrowDownIcon className={styles.icon} />
          </Button>

          <Popover className={styles.popover}>
            <div className={cn(styles.contentWrapper)}>
              <ul className={styles.tags}>
                {tags.map(tag => (
                  <li key={tag._id} className={styles.item} onClick={() => addTags(tag.tag)}>
                    <div className={styles.text}>
                      <Text
                        size="s"
                        className={cn(styles.tag, { [styles.active]: allTags.includes(tag.tag) })}
                      >
                        #{tag.tag.trim()}
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

export default ArticleTags
