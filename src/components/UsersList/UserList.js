import { useSelector } from "react-redux";
import { User } from "components/Users/Users";
import { selectAllUsers, selectStatusFilter } from "redux/selectors";
import { statusFilters } from "redux/constants";
import { Item, List } from "./UserList.stayled";

const getVisibleUsers = (users, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return users.filter(user => user.id < 5);
    case statusFilters.followings:
      return users.filter(user => user.id > 5);
    default:
      return users;
  }
};

export const TaskList = () => {
  const users = useSelector(selectAllUsers);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleUsers = getVisibleUsers(users, statusFilter);

  return (
    <List>
      {visibleUsers.map(user => (
        <Item key={user.id}>
          <User user={user} />
        </Item>
      ))}
    </List>
  );
};
