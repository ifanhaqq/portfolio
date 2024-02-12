import self from '../assets/img/self.jpeg'


export default function Intro() {
    return (
    <div className='row bg-main'>
        <img className='col-sm-4' height={750} src={self} alt='mine' />
        <div className='col-sm-7 align-self-center'><h1 className='text-white'>Hanifan Haqin</h1></div>
    </div>
    )
}