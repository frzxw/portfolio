import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    const controls = useAnimation()
    const [inViewRef, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={inViewRef}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
            }}
        >
            {children}
        </motion.div>
    )
}

export default FadeInSection
