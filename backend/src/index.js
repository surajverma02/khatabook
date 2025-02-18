const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir("./hisaabs", (err, files) => {
    if (err) return res.status(500).send(err);
    else {
      const allFile = files.map((file) => path.parse(file).name);
      res.render("index", { allFile });
    }
  });
});

// Authentication
app.get("/login", (req, res) => {
  return res.render("signin", {
    head: "Login Your Account",
    isLogin: true,
  });
});

app.get("/signup", (req, res) => {
  return res.render("signin", {
    head: "Create New Account",
    isLogin: false,
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let temp = await userModel.findOne({ email: email });
    if (temp) {
      if (temp.password === password) {
        return res.redirect("/");
      }
      return res.send("Invalid credentials.");
    }
    return res.send("User not found!");
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post("/signup", async (req, res) => {
  let { email, password } = req.body;
  try {
    let temp = await userModel.findOne({ email: email });
    if (!temp) {
      await userModel.create({ email, password });
      return res.redirect("/login");
    }
    return res.send("User is already in database. Refresh to retry!");
  } catch (err) {
    return res.status(500).send(err);
  }
});

// Hisaabs
app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/create", (req, res) => {
  const currentDate = new Date();
  const date = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

  const title = req.body.title.trim().replace(/\s+/g, " ");
  const fileName = `files/${title}.txt`;
  const fileData = `${req.body.details}`;

  fs.writeFile(fileName, fileData, (err) => {
    if (err) return res.status(500).send(err);
    else res.redirect("/");
  });
});

app.get("/edit/:hisaabid", (req, res) => {
  const hisaab = req.params.hisaabid;

  fs.readFile(`files/${hisaab}.txt`, "utf8", (err, data) => {
    if (err) return res.status(500).send(err);
    else res.render("edit", { hisaab, data });
  });
});

app.post("/update/:hisaabid", (req, res) => {
  const hisaab = req.params.hisaabid;

  fs.writeFile(`files/${hisaab}.txt`, req.body.details, (err) => {
    if (err) return res.status(500).send(err);
    else res.redirect("/");
  });
});

app.get("/delete/:hisaabid", (req, res) => {
  const hisaab = req.params.hisaabid;

  fs.unlink(`files/${hisaab}.txt`, (err) => {
    if (err) return res.send(err);
    else res.redirect("/");
  });
});

app.get("/hisaab/:hisaabid", (req, res) => {
  const hisaab = req.params.hisaabid;

  fs.readFile(`files/${hisaab}.txt`, "utf8", (err, data) => {
    if (err) return res.status(500).send(err);
    else res.render("hisaab", { hisaab, data });
  });
});

app.listen(3000);
