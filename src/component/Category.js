import { Link } from "react-router-dom";

const Category = ({valueArray, updateSelect}) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{valueArray[1]}, {valueArray[2]}, {valueArray[3]}, &nbsp;{valueArray[4]}, {valueArray[5]} 선택</h1>
                    <br></br>
                    <br></br>
                    <select onChange = {updateSelect} className="select select-bordered w-full max-w-xs">
                        <option value = "0" selected>{valueArray[0]}</option>
                        <option value = "1">{valueArray[1]}</option>
                        <option value = "2">{valueArray[2]}</option>
                        <option value = "3">{valueArray[3]}</option>
                        <option value = "4">{valueArray[4]}</option>
                        <option value = "5">{valueArray[5]}</option>
                    </select>
                    <Link to="/period" className="btn btn-primary">다음!</Link>
                </div>
            </div>
        </div>
    );
}

export default Category;