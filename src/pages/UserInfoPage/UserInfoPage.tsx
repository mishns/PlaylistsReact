import { default as React, FC } from "react";
import { Link, useParams } from "react-router-dom";
import { USERS } from "@data/users";
import styles from "./UserInfoPage.css";

export const UserInfoPage: FC = () => {
  const { userId } = useParams();
  const user = USERS[Number(userId)];
  const { playlist } = user;

  if (!user) {
    return (
      <div className={styles.UserInfoPage}>
        <h2>UserInfoPage</h2>

        <div className={styles.Users}>
          <p>пользователя таким userId нет</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.UserInfoPage}>
      <h2>UserInfoPage</h2>

      <div className={styles.Users}>
        <p>{user.jobTitle}</p>
        <p>{user.email}</p>
        <img src={user.avatar} alt="" width={200} height={200} />
        <p>{user.fullName}</p>
        <p className={styles.Bio}>{user.bio}</p>
        {playlist && (
          <span>
            playlist:{" "}
            {<Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>}
          </span>
        )}
      </div>
    </div>
  );
};
