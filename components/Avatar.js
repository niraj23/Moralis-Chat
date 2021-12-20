import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();

  return (
    <Image
      className='rounded-full bg-black'
      onClick={() => logoutOnPress && logout()}
      layout='fill'
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user?.get("username")
      }.svg`}
    />
  );
};

export default Avatar;
