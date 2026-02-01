import { useState } from "react";
import FilterBtn from "../components/FilterBtn";
import MyportfolioCard from "../components/MyPortfolioCard";
import portfolioData from "../config/PortfolioData";
import SecBtn from "../components/SecBtn";
import { HashLink } from "react-router-hash-link";

export default function MyPortfolio(){


    const [filterData, setFilterData] = useState("bestworks");

    return(
         <div className="myportfolio-box" id="myportfolio">
            <div className="myportfolio-top">
                <p className="titletwo">My Works!</p>
                <p className="servicecard-subtitle myportfolio-subtext">Wild enough to imagine, skilled enough to build.</p>
            </div>
            <div className="myportfolio-filterbtns" id="myportfolio-filterbtns">
                <FilterBtn 
                    click={() => setFilterData("bestworks")} 
                    btntext="Best Works" 
                    isActive={filterData === "bestworks"} 
                />
                <FilterBtn 
                    click={() => setFilterData("uxdesign")} 
                    btntext="UX Design" 
                    isActive={filterData === "uxdesign"} 
                />
                <FilterBtn 
                    click={() => setFilterData("branddesign")} 
                    btntext="Brand Design" 
                    isActive={filterData === "branddesign"} 
                />
                <FilterBtn 
                    click={() => setFilterData("graphicdesign")} 
                    btntext="Graphic Design" 
                    isActive={filterData === "graphicdesign"} 
                />
                <FilterBtn 
                    click={() => setFilterData("webdev")} 
                    btntext="Web Dev" 
                    isActive={filterData === "webdev"} 
                />
                <FilterBtn 
                    click={() => setFilterData("all")} 
                    btntext="All" 
                    isActive={filterData === "all"} 
                />
            </div>
            <div className="myportfolio-contentbox">
                {/* <MyportfolioCard 
                    chip={portfolioData[0].chip} 
                        img={portfolioData[0].image}
                        title={portfolioData[0].title}
                        stack={portfolioData[0].stack}
                        link={portfolioData[0].link}
                        description={portfolioData[0].description}
                /> */}

                {portfolioData.filter((item)=> filterData === 'all'|| item.category === filterData)
                    .map((passedData,index)=>(
                        <MyportfolioCard
                        chip={passedData.chip} 
                        date={passedData.date} 
                        img={passedData.image}
                        title={passedData.title}
                        stack={passedData.stack}
                        description={passedData.description}
                        link={passedData.link}/>
                    ))}
            </div>
            <HashLink smooth to="/portfolio#myportfolio" className="triobtn">Go to Top</HashLink>
        </div>
    )
}