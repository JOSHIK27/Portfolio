import Nav from "./landing/nav";
export default function Education() {
  return (
    <div>
      <Nav />
      <div className="flex ml-80 mt-20">
        <img
          src={"https://hwgraduateshow.com/images/hw_logo_white.png"}
          width={300}
        ></img>
        <div className="pt-8">
          <h1 className="ml-20 text-2xl text-white font-display mb-4">
            Msc in Data Science
          </h1>
          <h1 className="ml-20 text-white text-sm font-display">
            Sep 2023 - Sep 2024
          </h1>
        </div>
      </div>
      <div className="flex ml-[380px] mt-20">
        <img
          src={
            "https://seeklogo.com/images/I/indian-institutes-of-technology-logo-58B1C185B9-seeklogo.com.png"
          }
          width={200}
        ></img>
        <div className="pt-8">
          <h1 className="ml-28 text-2xl text-white font-display mb-4">
            ELECTRONICS AND COMMUNICATION <br></br> ENGINEERING
          </h1>
          <h1 className="ml-28 text-white text-sm font-display">
            JULY 2019 - MAY 2023
          </h1>
        </div>
      </div>

      <div className="flex ml-[380px] mt-20">
        <img
          src={
            "https://play-lh.googleusercontent.com/qRU0AH5rfGgiv_YRvdSwitTTL-y-GKEToGg645mQKU8fR6WzhH4byO9e0D-lDfRuhTY1"
          }
          width={200}
        ></img>
        <div className="pt-8">
          <h1 className="ml-28 text-2xl text-white font-display mb-4">
            SECONDARY SCHOOL
          </h1>
          <h1 className="ml-28 text-white text-sm font-display">
            JULY 2015 - MAY 2019
          </h1>
        </div>
      </div>
    </div>
  );
}
