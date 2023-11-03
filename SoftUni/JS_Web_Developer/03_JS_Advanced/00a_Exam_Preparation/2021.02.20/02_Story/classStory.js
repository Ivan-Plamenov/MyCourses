// 90 / 100
class Story {
  #likes; // private property for likes
  #comments; // private property for comments

  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this.#likes = [];
    this.#comments = [];
  }

  get likes() {
    if (this.#likes.length === 0) return `${this.title} has 0 likes`;
    if (this.#likes.length === 1) return `${this.#likes[0]} likes this story!`;
    return `${this.#likes[0]} and ${
      this.#likes.length - 1
    } others like this story!`;
  }

  like(username) {
    if (this.#likes.includes(username))
      throw new Error("You can't like the same story twice!");
    if (username === this.creator)
      throw new Error("You can't like your own story!");
    this.#likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    const index = this.#likes.indexOf(username);
    if (index === -1) throw new Error("You can't dislike this story!");
    this.#likes.splice(index, 1);
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    if (id === undefined || !this.#comments[id - 1]) {
      const newComment = {
        Id: this.#comments.length + 1,
        Username: username,
        Content: content,
        Replies: [],
      };
      this.#comments.push(newComment);
      return `${username} commented on ${this.title}`;
    }
    const comment = this.#comments[id - 1];
    const replyId = `${comment.Id}.${comment.Replies.length + 1}`;
    comment.Replies.push({
      Id: replyId,
      Username: username,
      Content: content,
    });
    return "You replied successfully";
  }

  toString(sortingType) {
    const sortFunctions = {
      asc: (a, b) => a.Id - b.Id || a.Id.localeCompare(b.Id),
      desc: (a, b) => b.Id - a.Id || b.Id.localeCompare(a.Id),
      username: (a, b) => a.Username.localeCompare(b.Username),
    };

    const sortedComments = [...this.#comments].sort(sortFunctions[sortingType]);
    for (let comment of sortedComments) {
      comment.Replies.sort(sortFunctions[sortingType]);
    }

    const commentsToString = sortedComments
      .map((comment) => {
        const repliesToString = comment.Replies.map(
          (reply) => `--- ${reply.Id}. ${reply.Username}: ${reply.Content}`
        ).join("\n");
        return `-- ${comment.Id}. ${comment.Username}: ${comment.Content}${
          repliesToString ? "\n" + repliesToString : ""
        }`;
      })
      .join("\n");

    return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${
      this.#likes.length
    }\nComments:\n${commentsToString || "Comments:"}`;
  }
}
