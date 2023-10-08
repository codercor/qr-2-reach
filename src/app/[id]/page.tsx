import {useParams} from "next/navigation";

const ProfilePage = () => {
    const {id} = useParams<{ id: string }>();
    return <div>Profile Page {id}</div>;
}


export default ProfilePage;