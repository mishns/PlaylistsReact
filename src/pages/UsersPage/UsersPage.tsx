import { default as React, FC } from "react";
import { ChangeEvent } from "react";
import { USERS } from "../../data";
import styles from "./UsersPage.css";
import { Link, useSearchParams } from "react-router-dom";

export const UsersPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParams({ searchName: value.toLowerCase() });
  };

  const searchName = searchParams.get("searchName") || "";

  const filteredUsers = USERS.filter(({ fullName }) =>
    fullName.toLowerCase().includes(searchName),
  );

  return (
    <div className={styles.UsersPage}>
      <h2>UsersPage</h2>

      <div className={styles.Users}>
        <label>
          введите имя{" "}
          <input
            type="text"
            value={searchName}
            onChange={handleSearchName}
            data-testid="SearchNameInput"
          />
        </label>

        {filteredUsers.map(({ id, fullName }) => (
          <Link to={`${id}`} key={id}>
            {fullName}
          </Link>
        ))}
      </div>
    </div>
  );
};
