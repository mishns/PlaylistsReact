import { default as React, FC } from "react";
import { Link, useParams } from "react-router-dom";
import { USERS } from "@data/users";
import styles from "./UserInfoPage.css";

export const UserInfoPage: FC = () => {
  const { userId } = useParams();
  const user = USERS[Number(userId)];

  if (!user) {
    return (
      <div className={styles.UserInfoPage}>
        <h2>UserInfoPage</h2>

        <div className={styles.Users}>
          <p data-testid="NoUserMessage">Пользователя c таким id нет</p>
        </div>
      </div>
    );
  }

  const { playlist } = user;
  return (
    <div className={styles.UserInfoPage}>
      <h2>UserInfoPage</h2>

      <div className={styles.Users}>
        <p>{user.jobTitle}</p>
        <p data-testid="UserEmail">{user.email}</p>
        <img src={user.avatar} alt="" width={200} height={200} />
        <p data-testid="UserName">{user.fullName}</p>
        <p className={styles.Bio}>{user.bio}</p>
        {playlist && (
          <span>
            playlist:{" "}
            {
              <Link
                to={`/playlists/${playlist.id}`}
                data-testid="UserPlaylistLink"
              >
                {playlist.name}
              </Link>
            }
          </span>
        )}
      </div>
    </div>
  );
};
