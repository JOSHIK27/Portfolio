import Nav from "./landing/nav";

export default function Achievements() {
  return (
    <div>
      <Nav />
      <div className="mt-20 ml-8 sm:ml-20">
        <div className="flex items-center mb-4">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/FFFFFF/star--v1.png"
            alt="star--v1"
          />
          <span className="text-white ml-2 font-display text-2xl">
            Secured a rank of 5241 in JEE Advanced 2019 (open category)
          </span>
        </div>

        <div className="flex items-center mb-4">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/FFFFFF/star--v1.png"
            alt="star--v1"
          />
          <span className="text-white ml-2 font-display text-2xl">
            Secured a rank of 4201 in JEE Mains 2019 (open category)
          </span>
        </div>

        <div className="flex items-center mb-4">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/FFFFFF/star--v1.png"
            alt="star--v1"
          />
          <span className="text-white ml-2 font-display text-2xl">
            Among top 6 percent coders in LeetCode
          </span>
        </div>

        <div className="flex items-center mb-4">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/FFFFFF/star--v1.png"
            alt="star--v1"
          />
          <span className="text-white ml-2 font-display text-2xl">
            Secured country (INDIA) rank below 700 in 5 instances (LeetCode
            Weekly) contests
          </span>
        </div>

        <div className="flex items-center mb-4">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-sharp/24/FFFFFF/star--v1.png"
            alt="star--v1"
          />
          <span className="text-white ml-2 font-display text-2xl">
            Secured country (INDIA) rank below 543 in LeetCode Bi Weekly contest
            124
          </span>
        </div>
      </div>
    </div>
  );
}
