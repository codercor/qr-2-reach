import {User} from "@prisma/client"

type PropsContentProfile = {
    user: User
}
const ContentProfile = ({user}: PropsContentProfile) => {

    return <> {user.name} </>
}

export default ContentProfile;