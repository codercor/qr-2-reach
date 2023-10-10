import {PrismaClient} from "@prisma/client";
import RegisterProfile from "@/app/[qr]/components/RegisterProfile";
import ContentProfile from "@/app/[qr]/components/ContentProfile";

const prisma = new PrismaClient();

const ProfilePage = async ({params}: { params: { qr: string } }) => {
    const {qr} = params;
    let content;
    try {
        let user = await prisma.user.findUniqueOrThrow({
            where: {qr},
        })
        content = <ContentProfile user={user} />
    } catch (e) {
        console.log("e",e)
        content = <RegisterProfile/>
    }

    return <div>
        <p> {qr} </p>
        {content}
    </div>;
}

export default ProfilePage;