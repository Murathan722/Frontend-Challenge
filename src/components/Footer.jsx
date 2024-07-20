import { useSelector } from "react-redux";
import "../css/footer.css";

function Footer() {
  const language = useSelector((state) => state.language.language);
  const { Git_hub } = useSelector((state) => state.projectItem);
  const { email, linkedin } = useSelector((state) => state.footer);

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <h1 className="footer-top-h1">
              {language === "Eng"
                ? "Let's work together on your next product."
                : "Bir sonraki ürününüz üzerinde birlikte çalışalım."}
            </h1>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <div className="e-mail-bölümü">
                <div>👉</div>
                <div className="email">{email}</div>
              </div>
            </div>
            <div className="footer-bottom-right">
              <a href="" className="personal-blog">
                {language === "Eng" ? "Personal blog" : "Kişisel blog"}
              </a>
              <a href="" className="github">
                {Git_hub}
              </a>
              <a href="" className="linkedin">
                {linkedin}
              </a>
            </div>
          </div>
          <p className="footer-text">
            {language === "Eng"
              ? "© 2024 Murathan Abanoz. All rights reserved."
              : " © 2024 Murathan Abanoz. Tüm hakları saklıdır"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
