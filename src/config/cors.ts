const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("origin", origin);

      callback(new Error("Not allowed by CORS"));
    }
  },
};

export { corsOptions };
