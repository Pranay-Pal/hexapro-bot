/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");
  app.on("issues.opened", async (context) => {
    console.log("----------------------------Issue Opened--------------------------");
    console.log("action: "+context.payload.action);
    console.log("repo name: "+context.payload.repository.name);
    console.log("issue title: "+context.payload.issue.title);
    console.log("issue body: "+context.payload.issue.body);
    console.log("-------------------------------------------------------------------");
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  app.on("issues.closed", async (context)=>{
    console.log("-----------------------------Issue Closed-------------------------");
    console.log("action: "+context.payload.action);
    console.log("repo name: "+context.payload.repository.name);
    console.log("issue title: "+context.payload.issue.title);
    console.log("issue body: "+context.payload.issue.body);
    console.log("-------------------------------------------------------------------");
  });
  app.on("pull_request",async (context)=>{console.log(context.payload);});
  app.on("push", async (context)=>{console.log(context.payload);});

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
