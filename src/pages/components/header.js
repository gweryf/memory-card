export default function Header(props) {
    const {score, highscore} = props
    return(
        <>
            <div className=" bg-black shadow-lg text-center p-5">
                <p className=" text-white font-bold text-4xl">Memory-Card</p>
                <div className=" text-white font-bold text-lg">Score: {score}</div>
                <div className=" text-white font-bold text-lg">Highscore: {highscore}</div>
            </div>
        </>
    )
}