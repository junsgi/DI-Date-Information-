import { Link } from "react-router-dom";

const Hello = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-6xl font-bold">Hello there</h1>
                    <p className="py-6 text-2xl">국경일(공휴일)정보를 조회하는 서비스 입니다. <br />제공기관 : 한국천문연구원</p>
                    <Link to="/period" className="btn btn-primary">시작!</Link>
                </div>
            </div>
        </div>
    );
}

export default Hello;