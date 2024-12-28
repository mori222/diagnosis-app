import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="home_container">
            <h1 className="home_title">適職診断</h1>
            <Link href="/quiz">
                <button className="home_button">診断する</button>
            </Link>
        </div>
    );
};

export default HomePage;