import Head from 'next/head';
type IMetaProps = {
	title: string;
	desc: string;
	canonical?: string;
	css?: string;
	js?: string;
	image?: string;
};
const Meta = (props: IMetaProps) => (
	<Head>
		<title>{props.title}</title>
		<meta name="description" content={props.desc} />
		<meta property="og:type" content="website" />
		<meta name="og:title" property="og:title" content={props.title} />
		<meta name="og:description" property="og:description" content={props.desc} />
		<meta property="og:site_name" content="StampMyVisa" />
		<meta property="og:url" content={`${props.canonical}`} />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={props.title} />
		<meta name="twitter:description" content={props.desc} />
		<meta name="twitter:site" content="@smv" />
		<meta name="twitter:creator" content="@smv" />
		<link rel="icon" type="image/png" href="/static/images/favicon.ico" />
		<link rel="apple-touch-icon" href="/static/images/favicon.ico" />
		{props.css && <link rel="stylesheet" href={`${props.css}`} />}
		{props.image ? (
			<meta property="og:image" content={`${props.image}`} />
		) : (
			<meta property="og:image" content="smv-image" />
		)}
		{props.image && <meta name="twitter:image" content={`${props.image}`} />}
		{props.canonical && <link rel="canonical" href={`${props.canonical}`} />}
		{props.js && <script type="text/javascript" src={`${props.js}`}></script>}
	</Head>
);
export default Meta;
