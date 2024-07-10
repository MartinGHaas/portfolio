import { FaGithub } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-14">
      <div>
        <div className="flex flex-col items-center justify-center font-bold">
          <span className="text-4xl">I'm</span><br />
          <h1 className="text-7xl leading-3">Martin</h1>
        </div>
      </div>
      <div className="flex gap-10">
        <Button theme="light" Icon={MdFileDownloadDone}>
          <span className="hidden sm:block">download </span>resume
        </Button>
        <Link  to="https://github.com/MartinGHaas" target="_blank">
          <Button theme="dark" Icon={FaGithub}>
            <span className="hidden sm:block">view </span>
            github profile
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
