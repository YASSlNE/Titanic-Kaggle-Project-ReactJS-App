import React from 'react'
import { motion } from 'framer-motion'
function Button() {





  return (
        <motion.button
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }} type="submit" className="ml-[818.25px] mt-[90px] bg-gray-700 hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border  hover:border-transparent rounded">
            Get prediction
        </motion.button>
  )
}

export default Button