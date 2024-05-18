'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const MotionWrapper: FC<Props> = ({ children }) => {
  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
