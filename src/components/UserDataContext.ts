import { UserData } from "@/firebase-common";
import { createContext } from "react";

const UserDataContext = createContext<UserData | undefined>(undefined);

export default UserDataContext;