import App from "next/app";
import Nav from "../components/navbar";
import "../assets/css/output.css";
import "../assets/css/custom.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
		</>
	);
}

MyApp.getInitialProps = async (appContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

export default MyApp;
