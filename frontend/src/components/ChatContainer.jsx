import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
  const { selectedUser, getMessagesByUserId, messages, isMessagesLoading, subscribeToMessages, unsubscribeFromMessages } = useChatStore();
  const { authUser } = useAuthStore();
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!selectedUser) return;
    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <ChatHeader />

      <div className="flex-1 overflow-y-auto px-8 py-8 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
        {isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : messages.length === 0 ? (
          <NoChatHistoryPlaceholder />
        ) : (
          <AnimatePresence>
            <div className="flex flex-col gap-5">
              {messages.map((msg) => {
                const isMine = msg.senderId === authUser._id;

                return (
                  <motion.div
                    key={msg._id}
                    initial={{ opacity: 0, y: 25, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[72%] flex gap-3 ${isMine ? "flex-row-reverse" : ""}`}>
                      <img src={isMine ? authUser.profilePic || "/avatar.png" : selectedUser.profilePic || "/avatar.png"} alt="" className="size-10 rounded-2xl object-cover border border-white/10 self-end" />

                      <div className="flex flex-col">
                        <div className={`rounded-3xl overflow-hidden backdrop-blur-xl shadow-xl ${isMine ? " bg-cyan-600 text-white rounded-br-lg" : "bg-white/[0.05] border-white/10 text-slate-100 rounded-bl-lg"}`}>
                          {msg.image && (
                            <img src={msg.image} alt="attachment" className="max-h-80 w-full object-cover" />
                          )}

                          {msg.text && (
                            <div className="px-5 py-4 text-[15px] leading-relaxed break-words">
                              {msg.text}
                            </div>
                          )}
                        </div>

                        <span className={`mt-2 text-[11px] text-slate-500 ${isMine ? "text-right" : ""}`}>
                          {new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              <div ref={bottomRef} />
            </div>
          </AnimatePresence>
        )}
      </div>

      <div className="border-t border-white/10 bg-black/20 backdrop-blur-xl p-6">
        <MessageInput />
      </div>
    </>
  );
}

export default ChatContainer;