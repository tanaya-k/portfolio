

function handleClick() {
    // e.preventDefault();
    alert('Should navigate to the about me page');
} 


function Home() {
    return (
        <>
        <h1>Hi</h1>
        <h2>i'm tanya</h2>
        <footer onClick={handleClick}>Click to see more...</footer>
        </>
    );
}

export default Home;