import { FaGithub, FaPhone, FaUser } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdHome } from "react-icons/md";
import { SiVelog } from "react-icons/si";

export const aboutMe = [
  {
    title: "이름",
    icon: <FaUser className="w-6 h-6 p-[2.5px]" />,
    content: "김범수",
    isLink: false,
  },
  {
    title: "생년월일",
    icon: <LiaBirthdayCakeSolid className="w-6 h-6" />,
    content: "2000.04.13",
    isLink: false,
  },
  {
    title: "주소지",
    icon: <MdHome className="w-6 h-6" />,
    content: "서울특별시 은평구",
    isLink: false,
  },
  {
    title: "연락처",
    icon: <FaPhone className="w-6 h-6 p-[3px]" />,
    content: "010-5605-2258",
    isLink: false,
  },
  {
    title: "Gitbub",
    icon: <FaGithub className="w-6 h-6 p-[1px]" />,
    content: "https://github.com/Devinix00",
    isLink: true,
  },
  {
    title: "Blog",
    icon: <SiVelog className="w-6 h-6 p-[2px]" />,
    content: "https://velog.io/@dpldpl/posts",
    isLink: true,
  },
  {
    techStacks: [
      {
        title: "React",
        imgSrc: "/images/techStacks/react.png",
      },
      {
        title: "Next.Js",
        imgSrc: "/images/techStacks/next_js.png",
      },
      {
        title: "Typescript",
        imgSrc: "/images/techStacks/typescript.png",
      },
      {
        title: "Tailwind CSS",
        imgSrc: "/images/techStacks/tailwind.png",
      },
      {
        title: "SCSS",
        imgSrc: "/images/techStacks/SCSS.png",
      },
      {
        title: "Axios",
        imgSrc: "/images/techStacks/axios.png",
      },
      {
        title: "React-Query",
        imgSrc: "/images/techStacks/react_query.png",
      },
      {
        title: "Zustand",
        imgSrc: "/images/techStacks/zustand.png",
      },
      {
        title: "RTK",
        imgSrc: "/images/techStacks/RTK.png",
      },
    ],
  },
  {
    tools: [
      {
        title: "Jira",
        imgSrc: "/images/tools/jira.png",
      },
      {
        title: "Slack",
        imgSrc: "/images/tools/slack.png",
      },
      {
        title: "Discord",
        imgSrc: "/images/tools/discord.png",
      },
    ],
  },
];
