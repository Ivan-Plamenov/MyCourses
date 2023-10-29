function comments(input) {
  const users = {};
  const articles = {};

  for (const line of input) {
    if (line.startsWith("user")) {
      const username = line.split(" ")[1];
      users[username] = [];
    } else if (line.startsWith("article")) {
      const articleName = line.split(" ")[1];
      articles[articleName] = [];
    } else if (line.includes("posts on")) {
      const [username, articleInfo] = line.split(" posts on ");
      const [articleName, commentInfo] = articleInfo.split(": ");
      if (
        users.hasOwnProperty(username) &&
        articles.hasOwnProperty(articleName)
      ) {
        const [commentTitle, commentContent] = commentInfo.split(", ");
        users[username].push({ title: commentTitle, content: commentContent });
        articles[articleName].push({
          username,
          title: commentTitle,
          content: commentContent,
        });
      }
    }
  }

  const sortedArticles = Object.keys(articles).sort((a, b) => {
    return articles[b].length - articles[a].length;
  });

  for (const article of sortedArticles) {
    console.log(`Comments on ${article}`);
    articles[article].sort((a, b) => {
      return a.username.localeCompare(b.username);
    });
    for (const comment of articles[article]) {
      console.log(
        `--- From user ${comment.username}: ${comment.title} - ${comment.content}`
      );
    }
  }
}
