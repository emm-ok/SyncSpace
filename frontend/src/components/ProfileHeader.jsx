import { useState, useRef } from "react";
import {
  LogOut,
  Volume2,
  VolumeX,
  Camera,
  Loader2,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const {
    logout,
    authUser,
    updateProfile,
    isUpdatingProfile,
  } = useAuthStore();

  const {
    isSoundEnabled,
    toggleSound,
  } = useChatStore();

  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;

      setSelectedImg(base64Image);

      await updateProfile({
        profilePic: base64Image,
      });
    };
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
      w-full
      px-4
      py-4
      border-b
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      "
    >
      <div className="
        flex
        items-center
        justify-between
      ">

        {/* USER PROFILE */}
        <div className="
          flex
          items-center
          gap-4
        ">

          {/* AVATAR */}
          <motion.button
            whileHover={{
              scale:1.05,
            }}
            whileTap={{
              scale:0.95,
            }}
            onClick={() => fileInputRef.current.click()}
            disabled={isUpdatingProfile}
            className="
            relative
            group
            size-10
            rounded-2xl
            overflow-hidden
            ring-2
            ring-white/10
            hover:ring-cyan-400/50
            transition
            "
          >

            {
              isUpdatingProfile ? (
                <div className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/60
                ">
                  <Loader2 className="
                    size-6
                    text-cyan-400
                    animate-spin
                  "/>
                </div>
              ) : null
            }


            <img
              src={
                selectedImg ||
                authUser?.profilePic ||
                "/avatar.png"
              }
              alt="profile"
              className="
              size-full
              object-cover
              "
            />


            {/* HOVER CAMERA */}
            <div className="
              absolute
              inset-0
              bg-black/50
              opacity-0
              group-hover:opacity-100
              transition
              flex
              items-center
              justify-center
            ">
              <Camera className="
                size-5
                text-white
              "/>
            </div>


          </motion.button>


          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />


          {/* USER DETAILS */}
          <div>

            <div className="
              flex
              items-center
              gap-2
            ">

              <h3 className="
                text-white
                font-semibold
                text-sm
                max-w-[170px]
                truncate
              ">
                {authUser?.fullName}
              </h3>


              {/* ONLINE DOT */}
              <span className="
                size-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_#34d399]
              "/>

            </div>


            <p className="
              text-xs
              text-slate-400
              mt-1
            ">
              Active now
            </p>

          </div>

        </div>


        {/* ACTION BUTTONS */}
        <div className="
          flex
          items-center
          gap-2
        ">


          <motion.button
            whileHover={{
              scale:1.08,
            }}
            whileTap={{
              scale:0.95,
            }}
            className="
            size-10
            rounded-xl
            flex
            items-center
            justify-center
            text-slate-300
            hover:text-white
            transition
            "
          >
            <Settings className="size-5"/>
          </motion.button>



          {/* SOUND */}
          <motion.button
            whileHover={{
              scale:1.08,
            }}
            whileTap={{
              scale:0.95,
            }}
            onClick={() => {

              mouseClickSound.currentTime = 0;

              mouseClickSound
                .play()
                .catch(() => {});

              toggleSound();

            }}
            className="
            size-6
            rounded-xl
            flex
            items-center
            justify-center
            text-slate-300
            hover:text-white
            transition
            "
          >

            {
              isSoundEnabled
              ?
              <Volume2 className="size-5"/>
              :
              <VolumeX className="size-5"/>
            }

          </motion.button>




          {/* LOGOUT */}
          <motion.button
            whileHover={{
              scale:1.08,
            }}
            whileTap={{
              scale:0.95,
            }}
            onClick={logout}
            className="
            size-6
            rounded-xl
            flex
            items-center
            justify-center
            text-red-300
            hover:text-red-200
            transition
            "
          >

            <LogOut className="size-5"/>

          </motion.button>


        </div>


      </div>

    </motion.header>
  );
}

export default ProfileHeader;