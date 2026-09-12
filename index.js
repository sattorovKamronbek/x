const fs = require("fs/promises");
const moment = require("moment");
const simpleGit = require("simple-git");
const FILE_PATH = "./data.json";
const COMMIT_COUNT = Number(process.env.N || process.argv[2] || 100);

const validateCommitCount = (count) => {
  if (!Number.isInteger(count) || count < 1) {
    throw new Error("N must be a positive integer, for example: N=7 npm start");
  }
};

const git = simpleGit();

const makeCommit = async (index) => {
  const date = moment().subtract(index, "days").hour(12).minute(0).second(0).format();
  const data = JSON.stringify({ data: date }, null, 2);

  await fs.writeFile(FILE_PATH, `${data}\n`);
  await git.add(FILE_PATH);
  process.env.GIT_AUTHOR_DATE = date;
  process.env.GIT_COMMITTER_DATE = date;
  try {
    await git.commit(`Contribution ${index + 1}/${COMMIT_COUNT} - ${date}`, {
      "--date": date,
    });
  } finally {
    delete process.env.GIT_AUTHOR_DATE;
    delete process.env.GIT_COMMITTER_DATE;
  }
  console.log(`${index + 1}/${COMMIT_COUNT}: ${date}`);
};

const run = async () => {
  validateCommitCount(COMMIT_COUNT);

  for (let index = COMMIT_COUNT - 1; index >= 0; index -= 1) {
    await makeCommit(index);
  }

  await git.push("origin", "main");
  console.log(`Done: ${COMMIT_COUNT} commits pushed.`);
};

if (require.main === module) {
  run().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}

module.exports = { validateCommitCount };