import { useEffect } from "react";
import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";

function ContactList() {
  const { getAllContacts, allContacts, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div className="space-y-3">
      {allContacts.map((contact, index) => {
        const isOnline = onlineUsers.includes(contact._id);
        const isSelected = selectedUser?._id === contact._id;

        return (
          <motion.button
            key={contact._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.03 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedUser(contact)}
            className={`w-full flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${isSelected ? "border-cyan-400/40 bg-cyan-500/15 shadow-[0_0_30px_rgba(34,211,238,0.15)]" : "border-white/10 bg-white/[0.03] hover:border-cyan-400/20 hover:bg-white/[0.06]"}`}
          >
            <div className="relative shrink-0">
              <img src={contact.profilePic || "/avatar.png"} alt={contact.fullName} className="size-14 rounded-2xl object-cover border border-white/10" />
              <span className={`absolute bottom-0 right-0 size-3 rounded-full border-2 border-[#050816] ${isOnline ? "bg-emerald-400" : "bg-slate-500"}`} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="truncate text-sm font-semibold text-white">{contact.fullName}</h3>
                {isOnline && <span className="text-[11px] font-medium text-emerald-400">Online</span>}
              </div>

              <div className="mt-1 flex items-center gap-2">
                <UserPlus className="size-3.5 text-cyan-400" />
                <p className="truncate text-xs text-slate-400">Start a new conversation</p>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

export default ContactList;