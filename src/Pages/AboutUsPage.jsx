import { FaGithubAlt } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="text-right py-40">
      <p>
        از اونجایی که حوصله نداشتم بیام اینجارو کامل کنم خودت بیا گیت هاب پروژه
        هارو ببین دیگه 🗿
      </p>
      <a
        target="blank"
        href="https://github.com/mahanmoradisouran"
        className="link link-primary"
      >
        My github <FaGithubAlt className="inline" size={20} />
      </a>
      <p>
        یک تشکر ویژه از صاحب محمدی عزیز که بک اند این پروژه رو زده و در اختیار
        بپه های دوره گذاشته {"=]"}
      </p>
      <a href="https://fronthooks.ir/" target="blank" className="link link-primary">وبسایت صاحب (فرانت هوکس)</a>

    </div>
  );
};

export default AboutUsPage;
