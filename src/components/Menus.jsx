import contacts from "../assets/img/contacts.svg"
import profile from '../assets/img/profile.svg'
import projects from '../assets/img/projects.svg'
import IconCard from './IconCard'
import SvgCard from './SvgCard'


export default function Menus() {
    return (
        <div className='row bg-linear'>
            <div className="row" style={{ marginTop: 100 }} >
                <SvgCard pict={profile} title='Profile' />
            </div>
            <div className="row" style={{ marginBottom: 100 }}>
                <div className="col-sm-6">
                    {/* <IconCard pict={contacts} title='contacts' /> */}
                    <SvgCard pict={projects} title='Projects' />
                </div>
                <div className="col-sm-6">
                    <SvgCard pict={contacts} title='Contacts' />
                </div>
            </div>
        </div>
    )
}