import { classNames } from '../Helpers'

function Placeholder({ className }) {
	return (
		<svg
			className={classNames('border-2 border-dashed border-gray-300 rounded bg-white text-gray-200', className)}
			preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200"
		>
			<path vectorEffect="non-scaling-stroke" strokeWidth="2" d="M0 0l200 200M0 200L200 0"></path>
		</svg>
	);
}

export default Placeholder;
