import './Home.css';
function Home(...props) {

    return (
        <div className="outer-profile">
            <div className="profile">
                <label className="text" htmlFor="username"> Username : <span className="text-value1">{props[0].data.data.usrname}</span></label>
                <br></br><br></br><br></br>
                <label className="text" htmlFor="name">Name : <span className="text-value1">{props[0].data.data.name}</span></label>
                <br></br><br></br><br></br>
                <label className="text" htmlFor="diaryname">Diary Name : <span className="text-value1">{props[0].data.data.diaryname}</span></label>
                <br></br><br></br><br></br>
                <label className="text" htmlFor="lang">Writing Language : <span className="text-value1">English</span> </label>
            </div>
        </div>
    )
}
export default Home;