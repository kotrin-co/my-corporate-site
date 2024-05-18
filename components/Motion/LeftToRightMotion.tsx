'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { FC, ReactNode } from 'react'

interface Props {
  fromX: string | number
  toX: string | number
  duration: number
  children: ReactNode
}

export const LeftToRightMotion: FC<Props> = ({
  children,
  fromX,
  toX,
  duration,
}) => {
  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        animate={{ x: toX }}
        transition={{ duration }}
        initial={{ x: fromX }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
