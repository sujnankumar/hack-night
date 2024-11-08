import classes from "./Explore.module.css";
import { useState } from "react";

const users = [
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
  {
    userProfileImgUrl:
      "https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=sLhAjsrcMFywuGD8D0_5t6SuboPthNoVKHVbV87PmPo",
    userName: "Leroy12",
    name: "Leroy Jenkins",
    position: "CTO of Company Inc.",
    description:
      "Responsible for leading the overall direction and strategy of the company.",
  },
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Trigger the callback passed from the parent component
    onSearch(searchTerm);
  };
  return (
    <>
      <div className={classes.searchBar}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for users..."
          className={classes.searchInput}
        />
        <button
          type="button"
          onClick={handleSearchSubmit}
          className={classes.searchButton}
        >
          Search
        </button>
      </div>
      <div className={classes.container}>
        {users.map((user) => {
          return (
            <div className={classes.box}>
              <img
                src={user.userProfileImgUrl}
                alt=""
                className={classes.img}
              />
              <div>
                <h2 className={classes.username}>{user.name}</h2>
                <span className={classes.position}>{user.position}</span>
                <p>{user.description}</p>
              </div>
              <button type="button" className={classes.button}>
                Read More
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Explore;
