import { motion } from "framer-motion";
import { MessageSquareText, Sparkles } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden p-14">
      <div className="absolute size-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative flex max-w-lg flex-col items-center text-center px-6">
        <div className="relative mb-6 flex size-24 items-center justify-center rounded-[30px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
          <MessageSquareText className="size-11 text-cyan-300" />
          <div className="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-cyan-500">
            <Sparkles className="size-4 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-white">Create your first connection with {name}</h3>
        <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">This conversation is ready for your first message. Start collaborating, share ideas, and keep your communication flowing seamlessly.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-300">👋 Send a greeting</button>
          <button className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-300">💡 Share an idea</button>
          <button className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-300">🚀 Start collaborating</button>
        </div>
      </motion.div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;