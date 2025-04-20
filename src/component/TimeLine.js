import { useMemo } from "react";

const TimeLine = ({ list }) => {

    const print = useMemo( () => list.map((it, idx) => {
        const year = Math.floor(it.locdate / 10000);
        const month = Math.floor(it.locdate % 10000 / 100);
        const day = Math.floor(it.locdate % 10000 % 100);
        return (
            <li key={idx}>
                <div className="timeline-start">{year}.{month}.{day} ({getDay(year, month, day)})</div>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end timeline-box">{it.dateName}</div>
                <hr />
                <hr />
            </li>
        );
    }), [list]);


    return (
        <ul className="timeline timeline-vertical">
            {print}
        </ul>
    );
}
export default TimeLine;

const isLeap = y => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);

const getDay = (y, m, d) => {
    let cnt = d
    const ckMonth = [4, 6, 9, 11]
    const result = ['일', '월', '화', '수', '목', '금', '토']
    for (let i = 1; i < y; i++) cnt += isLeap(i) ? 366 : 365
    for (let i = 1; i < m; i++) {
        if (ckMonth.includes(i)) cnt += 30
        else if (i === 2) cnt += isLeap(y) ? 29 : 28
        else cnt += 31
    }
    return result[cnt % 7];
}

