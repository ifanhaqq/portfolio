
import techStack from "../assets/img/tekstak.png"
import proglang from "../assets/img/languages.png"
import ProfileCard from "./sub_components/ProfileCard"
import TechCard from "./sub_components/TechCard"

export default function Profile() {
    return (
        <div className="row bg-profile" id="profile">
            <div className="col-sm-6">
                <ProfileCard />
            </div>
            <div className="col-sm-4 mt-4">
                <div className="row mb-4">
                    <TechCard pict={proglang} title='Programming Language' />
                </div>
                <div className="row mb-4">
                    <TechCard pict={techStack} title='Tech Stack' />
                </div>
            </div>
        </div>
    )
}