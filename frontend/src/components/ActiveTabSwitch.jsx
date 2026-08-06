import { motion } from "framer-motion";
import { MessageSquareMore, Users } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="relative flex items-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-1 m-3">
      <motion.div layoutId="active-tab" transition={{ type: "spring", stiffness: 380, damping: 30 }} className={`absolute top-1 bottom-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_30px_rgba(6,182,212,0.45)] ${activeTab === "chats" ? "left-1 right-1/2 mr-0.5" : "left-1/2 ml-0.5 right-1"}`} />
      <button onClick={() => setActiveTab("chats")} className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "chats" ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
        <MessageSquareMore className="size-4" />
        <span>Chats</span>
      </button>
      <button onClick={() => setActiveTab("contacts")} className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "contacts" ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
        <Users className="size-4" />
        <span>Contacts</span>
      </button>
    </div>
  );
}

export default ActiveTabSwitch;