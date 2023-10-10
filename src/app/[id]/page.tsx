import {NextPageContext} from "next";

const ProfilePage = async ({params}: { params: { id: string } }) => {
    const {id} = params;


    let content;

    return <div>Profile Page {id}</div>;
}

export default ProfilePage;