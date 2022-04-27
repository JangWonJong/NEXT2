import UserList from "@/components/user/UserList";
import { useSelector } from "react-redux";

const UserListPage = () => {
  const form = useSelector()
  return(<UserList/>)
}