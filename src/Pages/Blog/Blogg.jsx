import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Section from "./Section";
import Button from "./Button";
import Login from "./Login";
import CreateBlogg from "./Createblog";

function Blogg() {
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loginMessage, setLoginMessage] = useState("");

  const [buttonPopup, setButtonPopup] = useState(false);

  const [article, setArticle] = useState({
    title: "",
    text: "",
    url: "",
  });
  const [articles, setArticles] = useState([]);

  const handleLoginFieldChange = (fieldName, fieldValue) => {
    setLogin({ ...login, [fieldName]: fieldValue });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (login.userName === "Isabella" && login.password === "Lösenord") {
      setLogin({
        userName: "",
        password: "",
      });
      setIsLoggedIn(true);
      setLoginMessage("");
    } else {
      setLoginMessage("Wrong Password or Username");
    }
  };

  const handleArticleFieldChange = (fieldName, fieldValue) => {
    setArticle({ ...article, [fieldName]: fieldValue });
  };

  const handleArticleSubmit = (e) => {
    e.preventDefault();
    if (article.title && article.text) {
      const newArticle = { ...article, id: uuidv4() };
      setArticles([newArticle, ...articles]);
      setArticle({
        title: "",
        text: "",
        url: "",
      });
      setButtonPopup(false);
    }
  };

  const loginComponent = !isLoggedIn ? (
    <Login
      loginData={login}
      onChange={handleLoginFieldChange}
      submit={handleLoginSubmit}
      message={loginMessage}
    />
  ) : (
    <div className="row justify-content-end my-4">
      <div className="col-auto">
        <Button
          className="btn btn-primary btn-lg"
          onClick={() => setButtonPopup(true)}
        >
          Create a post
        </Button>
      </div>
      <div className="col-auto">
        <Button
          className="btn btn-dark btn-lg"
          onClick={() => {
            setIsLoggedIn(false);
            setButtonPopup(false);
          }}
        >
          Sign out
        </Button>
      </div>
    </div>
  );

  useEffect(() => {
    if (localStorage.getItem("Logged in") !== null) {
      const loggedIn = JSON.parse(localStorage.getItem("Logged in"));
      setIsLoggedIn(loggedIn);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Logged in", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    const loadedArticles = JSON.parse(localStorage.getItem("Articles"));
    setArticles(loadedArticles);
  }, []);

  useEffect(() => {
    localStorage.setItem("Articles", JSON.stringify([...articles]));
  }, [articles]);

  return (
    <div className="container-sm">
      {loginComponent}
      <CreateBlogg
        data={article}
        onChange={handleArticleFieldChange}
        submit={handleArticleSubmit}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      ></CreateBlogg>
      <div className="text-center fs-5">
        <h1>The blog portal</h1>
        <p className="row mb-4">Latest posts</p>
      </div>
      {articles.map((article, index) => (
        <Section
          key={index}
          className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-3"}
        >
          <div className="row-md-4">
            <img className="blogg-pic img-fluid" src={article.url} alt="" />
          </div>
          <div className="col-md-8 mt-3 mt-md-0">
            <h3>{article.title}</h3>
            <p>{article.text}</p>
            <Button className="btn btn-primary btn-lg">Read more</Button>
          </div>
        </Section>
      ))}
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-4"}>
        <div className="row mb-4">
          <img
            className="blogg-pic img-fluid"
            src="/images/Towers.jpg"
            alt=""
          />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>What can we expect in the future? </h3>
          <p>
          The future of real estate will involve an increased focus on added features, 
          like roof access, common areas, and even designated workspaces. 
          Investors operating multifamily properties may see these changes as early as this year, 
          though they will only continue to evolve.
          </p>
          <Button className="btn btn-primary btn-lg">Read more</Button>
        </div>
      </Section>
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-4"}>
        <div className="row-md-4">
          <img
            className="blogg-pic img-fluid"
            src="/images/Greece.jpg"
            alt=""
          />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>Why Investing in Real Estate Post-COVID Is Still a Good Idea</h3>
          <p>
          The pandemic brought many uncertainties with it—and not just for investors.
           With shelter-at-home orders in force throughout the country,
            many people were confined to their homes, unable to go to the office, 
            visit friends or family, make a quick trip to the grocery store, or take their planned vacations.
          </p>
          <Button className="btn btn-primary btn-lg">Read more</Button>
        </div>
      </Section>
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-4"}>
        <div className="row-md-4">
          <img
            className="blogg-pic img-fluid"
            src="/images/Castle2.jpg"
            alt=""
          />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>The new gothenburg?</h3>
          <p>
          At the Qvillestaden apartment building, Bornstein Lyckefors 
          have reinterpreted a genuine Gothenburg building type, namely the 
          so-called landshövdingehus (literally governor’s house) that marks the old dockworkers’ district at Herkulesgatan. 
          </p>
          <Button className="btn btn-primary btn-lg">Read more</Button>
        </div>
      </Section>
    </div>
  );
}

export default Blogg;
