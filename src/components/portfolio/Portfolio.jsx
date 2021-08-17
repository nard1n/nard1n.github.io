import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  contentPortfolio,
} from "../../data";
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web and Mobile Apps",
    },
    {
      id: "content",
      title: "Javascript Games",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item ">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}<a href={d.link}><LaunchIcon className="icon" /></a>
              <span><br/><br/>{d.desc}</span>
              <br/><br/>
              <span className="hspace"><a href={d.repo}><GitHubIcon className="icon" /></a></span>
            </h3>
            
            
          </div>
        ))}
      </div>
    </div>
  );
}
