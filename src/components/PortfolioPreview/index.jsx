import { h } from 'preact';
import Styles from './styles.module.scss';

function PortfolioPreview({ project }) {
	const { frontmatter } = project;
	return (
		<div className={Styles.card}>
			<div className={Styles.titleCard} style={`background-image:url(${frontmatter.img})`}>
				<h1 className={Styles.title}>{frontmatter.title}</h1>
			</div>
			<div>
				<a className={Styles.link} href={project.url}>
					<span className={Styles.linkInner}>view here</span>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
