import {PrismaClient} from "@prisma/client";
import RegisterProfile from "@/app/[id]/components/RegisterProfile";
import ContentProfile from "@/app/[id]/components/ContentProfile";

const prisma = new PrismaClient();

const ProfilePage = async ({params}: { params: { id: string } }) => {
    const {id} = params;
    let content;
    try {
        let user = await prisma.user.findUniqueOrThrow({
            where: {id},
        })
        content = <ContentProfile user={user} />
    } catch (e) {
        content = <RegisterProfile/>
    }

    return <div>
        <p> {id} </p>
        {content}
    </div>;
}

export default ProfilePage;