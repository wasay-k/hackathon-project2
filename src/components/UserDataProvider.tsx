import { useUserData } from "@/firebase-client/client/useUserData"
import UserDataContext from "./UserDataContext"
import Loading from "./Loading";
import { useRouter } from "next/router";
interface PageProps {
    children: React.ReactNode
}
const UserDataProvider: React.FC<PageProps> = ({ children }) => {
    const router = useRouter();
    const { userData, resolved } = useUserData(false);

    if (!resolved) {
        return <Loading size="lg" />;
    }

    const isLoginPage = router.pathname === '/login';

    // If resolved and userData available OR it's the login page, provide the context
    if ((resolved && userData) || isLoginPage) {
        return (
            <UserDataContext.Provider value={userData}>
                {children}
            </UserDataContext.Provider>
        );
    }

    // Redirect to login page for other pages
    router.push('/login');
    return null;
};
export default UserDataProvider;