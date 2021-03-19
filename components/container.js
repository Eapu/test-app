import Head from 'next/head'
import Navigation from './navigation'

const Container = (props) => {
    return (
        <div>
        <Head>
            <title>test app</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css" />
        </Head>
            <Navigation />
            <div className="container p-4">
                {props.children}
            </div>
        </div>
    );
}


export default Container;
