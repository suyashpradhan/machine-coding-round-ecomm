import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header pT1 pB1">
        <nav className="nav wrapper-fluid">
          <h1 className="headerText">ShopCart</h1>
          <a
            href="https://github.com/suyashpradhan/machine-coding-round-ecomm"
            alt="Github"
            target="_blank"
            rel="noopener"
          >
            Github
          </a>
        </nav>
      </header>
    </>
  );
};
