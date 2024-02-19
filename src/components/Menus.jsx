import contacts from "../assets/img/contacts.svg"
import ContactsLogo from "./sub_components/ContactsLogo"
import ProfileLogo from "./sub_components/ProfileLogo"
import ProjectsLogo from "./sub_components/ProjectsLogo"
import SvgCard from './sub_components/SvgCard'


export default function Menus() {
    return (
        <div className='row bg-linear'>
            <div className="row" style={{ marginTop: 100 }} >
                <ProfileLogo />
            </div>
            <div className="row" style={{ marginBottom: 100 }}>
                <div className="col-sm-6">
                    <ProjectsLogo />
                </div>
                <div className="col-sm-6">
                    <ContactsLogo />
                </div>
            </div>
        </div>
    )
}