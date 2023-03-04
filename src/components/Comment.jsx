const Comment = () => {
  return (
    <div className={styles.postCommentsList}>
      <div className={styles.postCommentsItem}>
        <div className={styles.postCommentHeader}>
          <span className={styles.postCommentAuthor}>Bill</span>
          <span className={styles.postCommentTime}>a minute ago</span>
          <span className={styles.postCommentLikes}>22</span>
        </div>

        <div className={styles.postCommentContent}>Random comment</div>
      </div>
    </div>
  );
};

export default Comment;
