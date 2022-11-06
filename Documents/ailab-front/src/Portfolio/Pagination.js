export const Pagination = ({counterPage, totalWorks, pagination}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalWorks / counterPage); i++) {
        pageNumbers.push(i);
    }
    return (

        <div className="pagination">
            {
                pageNumbers.map(number => (
                    <div key={number} className="background_pagin">
                        <div href="#" onClick={() => pagination(number)}>{number}</div>
                    </div>
                ))
            }

        </div>

    )
}
