import classes from "./Connections.module.css";

const connections = [
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
  {
    imgScr: "",
    name: "Leroy Jenkins",
    userName: "oeu",
    job: "Full-stack developer",
  },
];

const Connections = () => {
  return (
    <div className={classes.mainContainer}>
      {connections.map((connection) => (
        <div className={classes.container}>
          <img
            src={connection.imgScr}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {connection.name}
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                {connection.job}
              </p>
            </div>
          </div>
          <a href="" className="text-center text-purple">
            Profile
          </a>
        </div>
      ))}
    </div>
  );
};
export default Connections;
