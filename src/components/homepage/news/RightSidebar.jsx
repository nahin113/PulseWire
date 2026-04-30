import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h2 className="font bold text-lg mb-4">Login with</h2>
      <div className="flex flex-col gap-2">
      <button className="btn border-blue-500 text-blue-500">
        <FaGoogle></FaGoogle> Login with Google
      </button>
      <button className="btn border-black text-black">
        <FaGithub></FaGithub> Login with Github
      </button>
      </div>
    </div>
  );
};

export default RightSidebar;
