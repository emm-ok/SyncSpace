import { motion } from "framer-motion";
import { Sparkles, MessagesSquare } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden">
      <div className="absolute size-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute -bottom-20 size-80 rounded-full bg-blue-500/10 blur-[140px]" />
      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative flex max-w-xl flex-col items-center text-center px-8">
        <div className="relative mb-8 flex size-28 items-center justify-center rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 shadow-[0_0_60px_rgba(6,182,212,0.2)]">
          <MessagesSquare className="size-12 text-cyan-300" />
          <div className="absolute -top-2 -right-2 flex size-9 items-center justify-center rounded-full bg-cyan-500 shadow-lg">
            <Sparkles className="size-4 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Your workspace is ready</h2>
        <p className="mt-4 max-w-lg text-base leading-7 text-slate-400">Choose someone from your conversations or contacts to begin exchanging messages, share files, and collaborate instantly with your team in one secure workspace.</p>
      </motion.div>
    </div>
  );
};

export default NoConversationPlaceholder;