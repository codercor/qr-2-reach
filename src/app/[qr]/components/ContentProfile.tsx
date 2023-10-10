import {User} from "@prisma/client"

type PropsContentProfile = {
    user: User
}
const ContentProfile = ({user}: PropsContentProfile) => {
    console.log("user",user)
    return <div className="card w-96 bg-base-100 shadow-xl">
        <figure></figure>
        <div className="card-body">
            <h2 className="card-title">
                {user.name}
            </h2>
            <p> {user.phone} </p>
            <div className="card-actions justify-center">
                <button className="btn btn-primary w-full">Ara</button>
            </div>
        </div>
    </div>
}

export default ContentProfile;