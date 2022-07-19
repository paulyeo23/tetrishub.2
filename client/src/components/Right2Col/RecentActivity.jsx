const RecentActivity = ({ Info }) => {
  let Render = [];
  let tempRender = [];
  const limit = 20;

  const comments = [
    ...new Set(Info.Comments.map((comment) => comment.threadId)),
  ];

  const threads = Info.Threads;

  const allActivity = threads.concat(comments).sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  for (
    let i = 0;
    i < (limit > allActivity.length ? allActivity.length : limit);
    i++
  ) {
    let comment = allActivity[i];
    let thread =
      comment.threadId == undefined
        ? comment
        : Info.Threads.filter((thread) => {
            return thread.id == comment.threadId;
          })[0];
    let replies = Info.Comments.filter((comment) => {
      return thread.id == comment.threadId;
    });
    tempRender.push(
      <a
        href={`/forums/threads/${thread.title}`}
        className="col-box activity a-reset matchCat "
        bis_skin_checked="1"
      >
        <span className="topic a-default" title={thread.title}>
          {thread.title}
        </span>
        <span style={{ float: "right", paddingRight: "5px" }}>
          {replies.length}
        </span>
      </a>,
    );
  }

  Render = [
    <aside style={{ margin: "5px" }}>
      <div className="recent-activity" bis_skin_checked="1">
        <h1>
          <a href="/forums" className="a-reset" bis_skin_checked="1">
            RECENT ACTIVITY
          </a>
        </h1>
      </div>
      {tempRender}
      <a
        href="/create-thread"
        className="button postnewbutton no-promode"
        bis_skin_checked="1"
      >
        Post new topic
      </a>
    </aside>,
  ];
  return Render;
};
export default RecentActivity;
