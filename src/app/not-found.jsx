"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-bold text-gray-900"
        >
          404
        </motion.h1>


        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-2xl font-semibold text-gray-800"
        >
          Page not found
        </motion.h2>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-gray-500"
        >
          The page you’re looking for doesn’t exist or has been moved.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="w-[500px] h-[500px] bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
}
