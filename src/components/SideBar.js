import React from 'react'

const SideBar = () => {


    return (
        <div>
            <div>
                <div>Most Popular</div>
                <div>New</div>
                <div>Highest Grossing</div>
                <div>Actors</div>
                <div>Genres</div>
            </div>

            <div className="total">
                {/* <button
                    onClick={() => setMovies(moviesDefault)}
                    className="total-btn">
                    Total
                </button> */}
            </div>

            <div className="category">
                {/* {gen_ids.map(g => {
                    let newMovies = moviesDefault.filter(m => m.genre_ids.includes(g.id))
                    return (<button key={g.id}
                        onClick={() => setMovies(newMovies)}
                        className="gen-btn">
                        <div>{g.count}</div>
                        <div>{g.name}</div>
                    </button>)
                })}; */}
            </div>
        </div>
    )
}

export default SideBar
