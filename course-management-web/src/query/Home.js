const Home = () => {
    return (  
        <div className="home panel blank">
            <div className="output-panel">
                <h2>Start Querying {' '}
                    <span style={{ "--i": 0 }} data-text="by User">by User</span>{' '}
                    <span style={{ "--i": 1 }} data-text="by Course">by Course</span>{' '}
                    <span style={{ "--i": 2 }} data-text="All"> All</span>
                </h2>
            </div>
            <div className="input-panel">

            </div>
            
        </div>
    );
}
 
export default Home;