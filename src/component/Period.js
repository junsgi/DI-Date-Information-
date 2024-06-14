import { Link } from "react-router-dom";

const Period = ({updateStEd, startEnd}) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-6xl font-bold mb-10">언제부터 언제까지?</h1>
                    <br></br>
                    <input type="date" name = "start" onChange={updateStEd} value = {startEnd.start} className="bg-base-200 rounded-box max-w-xs mr-2" /> ~ 
                    <input type="date" name = "end" onChange={updateStEd} min={startEnd.start} value = {startEnd.end} className="bg-base-200 rounded-box max-w-xs ml-2 mb-5" />
                    <br />
                    <Link to = "/result" className="btn btn-primary">다음!</Link>
                </div>
            </div>
        </div>
    );
}

export default Period;