import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; evan tu | {new Date().getFullYear()}
			<small className={Styles.byline}>Made with Astro</small>
		</footer>
	);
}
export default Footer;
