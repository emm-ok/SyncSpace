import { motion } from "framer-motion";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { useState } from "react";
import { Link } from "react-router";
import {
  MessageCircleIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  LoaderIcon,
} from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";


function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl">
        <BorderAnimatedContainer>
          <motion.section
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-2xl
            "
          >
            <div
              className="
                grid
                min-h-[720px]
                grid-cols-1
                lg:grid-cols-2
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  p-8
                  lg:border-r
                  lg:border-white/10
                "
              >
                <div className="w-full max-w-md">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                    }}
                    className="w-full max-w-md"
                  >
                    <div className="mb-10 text-center">
                      <motion.div
                        initial={{
                          scale: 0,
                        }}
                        animate={{
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.4,
                          type: "spring",
                        }}
                        className="
        mx-auto
        mb-6
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-cyan-400
        to-blue-600
        shadow-lg
        shadow-cyan-500/30
      "
                      >
                        <MessageCircleIcon
                          className="h-8 w-8 text-white"
                        />
                      </motion.div>

                      <h1
                        className="
        text-3xl
        font-bold
        tracking-tight
        text-white
      "
                      >
                        Welcome Back
                      </h1>

                      <p
                        className="
        mt-3
        text-sm
        text-slate-400
      "
                      >
                        Sign in to continue managing your account
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <label
                          className="
          mb-2
          block
          text-sm
          font-medium
          text-slate-300
        "
                        >
                          Email Address
                        </label>

                        <div className="relative">
                          <MailIcon
                            className="
            absolute
            left-4
            top-1/2
            h-5
            w-5
            -translate-y-1/2
            text-slate-500
          "
                          />

                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="john@example.com"
                            className="
            h-14
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            pl-12
            pr-4
            text-white
            outline-none
            transition
            placeholder:text-slate-500
            focus:border-cyan-400
            focus:bg-white/10
          "
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          className="
          mb-2
          block
          text-sm
          font-medium
          text-slate-300
        "
                        >
                          Password
                        </label>

                        <div className="relative">
                          <LockIcon
                            className="
            absolute
            left-4
            top-1/2
            h-5
            w-5
            -translate-y-1/2
            text-slate-500
          "
                          />

                          <input
                            type={
                              showPassword
                                ? "text"
                                : "password"
                            }
                            value={formData.password}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                password: e.target.value,
                              })
                            }
                            placeholder="Enter your password"
                            className="
            h-14
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            pl-12
            pr-12
            text-white
            outline-none
            transition
            placeholder:text-slate-500
            focus:border-cyan-400
            focus:bg-white/10
          "
                          />

                          <button
                            type="button"
                            onClick={() =>
                              setShowPassword(!showPassword)
                            }
                            className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            transition
            hover:text-white
          "
                          >
                            {showPassword ? (
                              <EyeOffIcon className="h-5 w-5" />
                            ) : (
                              <EyeIcon className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{
                          scale: 1.02,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        disabled={isLoggingIn}
                        type="submit"
                        className="
        flex
        h-14
        w-full
        items-center
        justify-center
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        font-semibold
        text-white
        shadow-lg
        shadow-cyan-500/20
        transition
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
                      >
                        {isLoggingIn ? (
                          <LoaderIcon
                            className="
            h-6
            w-6
            animate-spin
          "
                          />
                        ) : (
                          "Sign In"
                        )}
                      </motion.button>
                    </form>

                    <div
                      className="
      mt-8
      text-center
      text-sm
      text-slate-400
    "
                    >
                      Don't have an account?
                      <Link
                        to="/signup"
                        className="
        ml-2
        font-medium
        text-cyan-400
        transition
        hover:text-cyan-300
      "
                      >
                        Create Account
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div
                className="
                  hidden
                  lg:flex
                  items-center
                  justify-center
                  relative
                  overflow-hidden
                  bg-gradient-to-br
                  from-white/5
                  to-transparent
                  p-10
                "
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                  }}
                  className="
    relative
    hidden
    overflow-hidden
    bg-gradient-to-br
    from-cyan-500/5
    via-transparent
    to-blue-600/10
    p-10
    lg:flex
    lg:flex-col
    lg:items-center
    lg:justify-center
  "
                >
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
      relative
      z-10
      flex
      w-full
      max-w-lg
      justify-center
    "
                  >
                    <div
                      className="
        absolute
        inset-0
        rounded-full
        bg-cyan-500/20
        blur-3xl
      "
                    />

                    <img
                      src="/img3.jpg"
                      alt="People connecting online"
                      className="
        relative
        z-10
        w-full
        max-w-md
        object-contain
        drop-shadow-2xl
      "
                    />
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.7,
                      duration: 0.5,
                    }}
                    className="
      relative
      z-10
      mt-10
      text-center
    "
                  >
                    <h2
                      className="
        text-3xl
        font-bold
        tracking-tight
        text-white
      "
                    >
                      Connect Anytime,
                      <span
                        className="
          block
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
          bg-clip-text
          text-transparent
        "
                      >
                        Anywhere
                      </span>
                    </h2>

                    <p
                      className="
        mx-auto
        mt-4
        max-w-sm
        text-sm
        leading-6
        text-slate-400
      "
                    >
                      Secure conversations, seamless collaboration,
                      and a smarter way to stay connected with your
                      community.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.9,
                      duration: 0.5,
                    }}
                    className="
      relative
      z-10
      mt-8
      flex
      flex-wrap
      justify-center
      gap-3
    "
                  >
                    {[
                      "Secure",
                      "Fast Setup",
                      "Private",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 1 + index * 0.15,
                        }}
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          text-sm
          font-medium
          text-slate-300
          backdrop-blur-md
        "
                      >
                        {item}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
      absolute
      right-10
      top-10
      h-32
      w-32
      rounded-full
      border
      border-cyan-400/20
    "
                  />

                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
      absolute
      bottom-10
      left-10
      h-48
      w-48
      rounded-full
      border
      border-blue-500/20
    "
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
        </BorderAnimatedContainer>
      </div>
    </main>
  );
}
export default LoginPage;





// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
// import { MessageCircleIcon, MailIcon, LoaderIcon, LockIcon } from "lucide-react";
// import { Link } from "react-router";

// function LoginPage() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const { login, isLoggingIn } = useAuthStore();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(formData);
//   };

//   return (
//     <div className="w-full flex items-center justify-center p-4 bg-slate-900">
//       <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
//         <BorderAnimatedContainer>
//           <div className="w-full flex flex-col md:flex-row">
//             {/* FORM CLOUMN - LEFT SIDE */}
//             <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
//               <div className="w-full max-w-md">
//                 {/* HEADING TEXT */}
//                 <div className="text-center mb-8">
//                   <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
//                   <h2 className="text-2xl font-bold text-slate-200 mb-2">Welcome Back</h2>
//                   <p className="text-slate-400">Login to access to your account</p>
//                 </div>

//                 {/* FORM */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* EMAIL INPUT */}
//                   <div>
//                     <label className="auth-input-label">Email</label>
//                     <div className="relative">
//                       <MailIcon className="auth-input-icon" />

//                       <input
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         className="input"
//                         placeholder="johndoe@gmail.com"
//                       />
//                     </div>
//                   </div>

//                   {/* PASSWORD INPUT */}
//                   <div>
//                     <label className="auth-input-label">Password</label>
//                     <div className="relative">
//                       <LockIcon className="auth-input-icon" />

//                       <input
//                         type="password"
//                         value={formData.password}
//                         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                         className="input"
//                         placeholder="Enter your password"
//                       />
//                     </div>
//                   </div>

//                   {/* SUBMIT BUTTON */}
//                   <button className="auth-btn" type="submit" disabled={isLoggingIn}>
//                     {isLoggingIn ? (
//                       <LoaderIcon className="w-full h-5 animate-spin text-center" />
//                     ) : (
//                       "Sign In"
//                     )}
//                   </button>
//                 </form>

//                 <div className="mt-6 text-center">
//                   <Link to="/signup" className="auth-link">
//                     Don't have an account? Sign Up
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* FORM ILLUSTRATION - RIGHT SIDE */}
//             <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
//               <div>
//                 <img
//                   src="/login.png"
//                   alt="People using mobile devices"
//                   className="w-full h-auto object-contain"
//                 />
//                 <div className="mt-6 text-center">
//                   <h3 className="text-xl font-medium text-cyan-400">Connect anytime, anywhere</h3>

//                   <div className="mt-4 flex justify-center gap-4">
//                     <span className="auth-badge">Free</span>
//                     <span className="auth-badge">Easy Setup</span>
//                     <span className="auth-badge">Private</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </BorderAnimatedContainer>
//       </div>
//     </div>
//   );
// }
// export default LoginPage;
